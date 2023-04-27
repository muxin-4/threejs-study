import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import styles from './index.less';

const OrbitControlsPage: React.FC = () => {
  const { name } = useModel('global');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      1,
      1000,
    );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }

    animate();

    return () => {
      // 清空场景中的所有子元素
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      // 清空渲染器的缓存
      renderer.dispose();
    };
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <canvas ref={canvasRef} />
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default OrbitControlsPage;
