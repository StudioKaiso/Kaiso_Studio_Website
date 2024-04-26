import * as THREE from "three";
import {
    THREEx
} from "threex.domevents"
import {
    AmbientLight,
    DirectionalLight,
    DirectionalLightShadow,
    HemisphereLight,
    Int8Attribute
} from "three";
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
    EffectComposer
} from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {
    RenderPass
} from 'three/examples/jsm/postprocessing/RenderPass.js'
import {
    UnrealBloomPass
} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import {
    SMAAPass
} from 'three/examples/jsm/postprocessing/SMAAPass.js'
import {
    ShaderPass
} from 'three/examples/jsm/postprocessing/ShaderPass.js'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'


export var cameraRotationInit;

/*-----------------------------------------------Paramètre de la caméra---------------------------------------------*/
export const camera = new THREE.PerspectiveCamera(
    30, /*Angle de vu*/
    window.innerWidth / window.innerHeight, /*Taille de la fenetre*/
    0.1, /*Plus proche de ce que l'on voit*/
    100 /*Plus loin de ce que l'on voit*/
);

const canvas = document.querySelector('#c');

export const renderer = new THREE.WebGLRenderer({
    canvas
});

const renderTarget = new THREE.WebGLRenderTarget(1920, 1080, {
    /*samples: renderer.getPixelRatio() === 1 ? 2 : 0*/
});
const effectComposer = new EffectComposer(renderer, renderTarget);

export const scene = new THREE.Scene();

export function post() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    renderer.setClearColor(0xA6B6D7); //Background color

    /*---------------------------------------------Creation d'un plane / sol--------------------------------------------------*/
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshStandardMaterial({
        //color: 0x9794D6
        color: 0xA6B6D7
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true;
    plane.position.y += -0.1;
    scene.add(plane);

    /*-----------------------------------------------Creation de brume---------------------------------------------------*/
    //scene.fog = new THREE.Fog(0x9794D6, 0, 70);

    /*-----------------------------------------------Creation d'une lumière ----------------------------------------------*/
    const ambientlight = new THREE.AmbientLight(0xA6B6D7, 2);
    scene.add(ambientlight);

    const light = new THREE.DirectionalLight(0XFFFFFF, 2);
    light.position.set(10, 30, -10);
    light.target.position.set(0, 0, -25);

    //Frustum Light
    light.shadow.camera.top = 5;
    light.shadow.camera.bottom = -8;
    light.shadow.camera.right = 5;
    light.shadow.camera.left = -20;
    light.shadow.camera.near = 30;
    light.shadow.camera.far = 45;

    //Shadow map resolution
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    scene.add(light);
    scene.add(light.target);

    light.castShadow = true;
    light.shadow.radius = 3;
    light.shadow.blurSamples = 10;

    /*------------------------------------------------Position de la camera + Update--------------------------------------*/
    //cameraRotationInit = camera.rotation;
    //new OrbitControls(camera, renderer.domElement);

    /*------------------------------------------------Post-Processing--------------------------------------*/
    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    /*Anti-aliasing*/
    if (renderer.getPixelRatio() === 1 && !renderer.capabilities.isWebGL2) {
        const smaaPass = new SMAAPass();
        effectComposer.addPass(smaaPass);
    }

    THREE.ColorManagement.enabled = true;

    renderer.physicallyCorrectLights = true;
    //renderer.outputEncoding = THREE.sRGBEncoding;


    /*Bloom*/
    const unrealBloomPass = new UnrealBloomPass();
    effectComposer.addPass(unrealBloomPass);

    unrealBloomPass.strength = 0.14;
    unrealBloomPass.radius = 2;
    unrealBloomPass.threshold = 0.3;

    /*Tint*/
    /*
        const TintShader = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                uTint: {
                    value: null
                }
            },
            vertexShader: `
            varying vec2 vUv;

                void main()
                {
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

                    vUv = uv;
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform vec3 uTint;

                varying vec2 vUv;

                void main()
                {
                    vec4 color = texture2D(tDiffuse, vUv);
                    color.rgb += uTint;

                    gl_FragColor = color;
                }
            `
        }

        const tintPass = new ShaderPass(TintShader);
        tintPass.material.uniforms.uTint.value = new THREE.Vector3(0, 0, 0.05); //R V B (Between -1 and 1)
        effectComposer.addPass(tintPass);*/



    /*------------------------------------------------Resize--------------------------------------*/
    canvas.onresize = function () {
        effectComposer.setSize(canvas.clientWidth, canvas.clientHeight);
        effectComposer.setPixelRatio(Math.min(canvas.devicePixelRatio, 2));
    }
};

function resizeRendererToDisplaySize(renderer) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if (canvas.clientWidth <= 1024 && canvas.clientWidth > 650) {
        camera.position.set(0, 21, 23);
        camera.lookAt(-8, -2, 0);
        //camera.rotation.x = -1;

        scene.fog = new THREE.Fog(0xBE0426, 20, 100);
    }
    if (canvas.clientWidth > 1024) {
        camera.position.set(0, 21, 23);
        //camera.rotation.x = -0.5;

        //camera.position.set(-2, 20, -20);
        camera.lookAt(-8, -2, 0);

        scene.fog = new THREE.Fog(0xBE0426, 20, 90);
    }
    if (canvas.clientWidth <= 650) {
        camera.position.set(20, 40, 20);
        camera.lookAt(-5, 0, -2);
        //camera.rotation.x = -1;

        scene.fog = new THREE.Fog(0xBE0426, 20, 180);
    }

    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

export function animate(time) {
    time *= 0.001;
    requestAnimationFrame(animate);

    if (resizeRendererToDisplaySize(renderer)) {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    effectComposer.render();
}