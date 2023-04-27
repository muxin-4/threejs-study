import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './index.less';

const HelloWorldPage: React.FC = () => {
  const { name } = useModel('global');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // 创建场景
    const scene = new THREE.Scene();
    //  创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    );
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ canvas });

    // 创建一个立方体几何体，并将其放置于场景中心
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 将相机向外移动一些，使其不与立方体重叠
    camera.position.z = 5;

    // 创建渲染函数，并在每个帧中旋转立方体
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
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

export default HelloWorldPage;
