import './index.css'
import spaceImg from './assets/images/space.jpg';
import linoImg from './assets/images/lino24.png';
import moonImg from './assets/images/moon.jpg';
import normalImg from './assets/images/normal.jpg';

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 });
const torus = new THREE.Mesh( geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(5, 5, 5);
scene.add(pointLight, ambientLight)

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z)
  scene.add(star);
}
Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load(spaceImg, onload);
scene.background = spaceTexture;

// Abel

const abelTexture = new THREE.TextureLoader().load(linoImg, onload);

const lino = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: abelTexture })
);
lino.position.set(2,3,5)
scene.add(lino);

// moon

const moonTexture = new THREE.TextureLoader().load(moonImg, onload);
const normalTexture = new THREE.TextureLoader().load(normalImg, onload);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({ map: moonTexture, normalMap: normalTexture
   })
);
moon.position.z = 30;
moon.position.setX(-10);
scene.add(moon);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  lino.rotation.y += 0.01;
  lino.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

window.addEventListener('scroll',() => moveCamera());



animate();

//form section 

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
    form.submit();
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
});