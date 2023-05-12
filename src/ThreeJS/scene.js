import * as THREE from "three";
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
    camera,
    renderer,
    scene,
} from './post.js'

let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();

export default function loaderPerso() {
    const assetLoader = new GLTFLoader();

    /*-----------------------------------------------Importer un element 3D---------------------------------------------*/
    const THREEURL = new URL('../Assets/3D/KaisoScene.glb',
        import.meta.url); //Import le fichier 3D

    //*-----------------------------------------------Importation du model-----------------------------------------*/
    assetLoader.load(THREEURL.href, function (gltf) {
            const model = gltf.scene;

            scene.add(model);
            model.position.set(23, 0, -13);
            model.rotation.y += -0.3;
            model.scale.set(0.85, 0.85, 0.85);

            //Shadow on all objects----------------------------------------------------
            gltf.scene.traverse(function (node) {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });

            const Steeve = model.children[0];
            const Isaac = model.children[1];
            const Adrien = model.children[2];
            const Mike = model.children[3];

            //Steeve_Assets
            const Steeve_Chair = model.children[4];

            //Isaac_Assets
            const Isaac_Pen = model.children[7];
            const Isaac_Tablet = model.children[6];

            //Adrien_Assets
            const Adrien_Computer = model.children[9];

            //Mike_Assets
            const Mike_Pen = model.children[12];
            const Mike_Paper = model.children[10];


            console.log(model);

            idleAnimation_Steeve();
            idleAnimation_Isaac();
            idleAnimation_Adrien();
            idleAnimation_Mike();

            function idleAnimation_Steeve() {
                const clips = gltf.animations;

                const idleClip = clips.find(clip => clip.name.includes("Steeve_Idle"));
                const idleClip_Chair = clips.find(clip => clip.name.includes("SteeveChair_Idle"));

                Steeve.animations.push(idleClip);
                Steeve_Chair.animations.push(idleClip_Chair);

                const mixer = new THREE.AnimationMixer(Steeve);
                const mixer_Chair = new THREE.AnimationMixer(Steeve_Chair);

                const action = mixer.clipAction(idleClip);
                const action_Chair = mixer_Chair.clipAction(idleClip_Chair);

                mixer.clipAction(idleClip).reset();
                mixer_Chair.clipAction(idleClip_Chair).reset();

                mixer.clipAction(idleClip).clampWhenFinished = true;
                mixer_Chair.clipAction(idleClip_Chair).clampWhenFinished = true;

                action.play();
                action_Chair.play();

                var clock = new THREE.Clock();

                animate();

                function animate() {
                    var dt = clock.getDelta();
                    mixer.update(dt);
                    mixer_Chair.update(dt);
                    requestAnimationFrame(animate);
                }
            }

            function idleAnimation_Isaac() {
                const clips = gltf.animations;

                const idleClip = clips.find(clip => clip.name.includes("Isaac_Idle"));
                const idleClip_Pen = clips.find(clip => clip.name.includes("IsaacPen_Idle"));
                const idleClip_Tablet = clips.find(clip => clip.name.includes("IsaacTablet_Idle"));

                Isaac.animations.push(idleClip);
                Isaac_Pen.animations.push(idleClip_Pen);
                Isaac_Tablet.animations.push(idleClip_Tablet);

                const mixer = new THREE.AnimationMixer(Isaac);
                const mixer_Pen = new THREE.AnimationMixer(Isaac_Pen);
                const mixer_Tablet = new THREE.AnimationMixer(Isaac_Tablet);

                const action = mixer.clipAction(idleClip);
                const action_Pen = mixer_Pen.clipAction(idleClip_Pen);
                const action_Tablet = mixer_Tablet.clipAction(idleClip_Tablet);

                mixer.clipAction(idleClip).reset();
                mixer_Pen.clipAction(idleClip_Pen).reset();
                mixer_Tablet.clipAction(idleClip_Tablet).reset();

                mixer.clipAction(idleClip).clampWhenFinished = true;
                mixer_Pen.clipAction(idleClip_Pen).clampWhenFinished = true;
                mixer_Tablet.clipAction(idleClip_Tablet).clampWhenFinished = true;

                action.play();
                action_Pen.play();
                action_Tablet.play();

                var clock = new THREE.Clock();

                animate();

                function animate() {
                    var dt = clock.getDelta();
                    mixer.update(dt);
                    mixer_Pen.update(dt);
                    mixer_Tablet.update(dt);
                    requestAnimationFrame(animate);
                }
            }

            function idleAnimation_Adrien() {
                const clips = gltf.animations;

                const idleClip = clips.find(clip => clip.name.includes("Adrien_Idle"));
                const idleClip_Computer = clips.find(clip => clip.name.includes("AdrienComputer_Idle"));

                Adrien.animations.push(idleClip);
                Adrien_Computer.animations.push(idleClip_Computer);

                const mixer = new THREE.AnimationMixer(Adrien);
                const mixer_Computer = new THREE.AnimationMixer(Adrien_Computer);

                const action = mixer.clipAction(idleClip);
                const action_Computer = mixer_Computer.clipAction(idleClip_Computer);

                mixer.clipAction(idleClip).reset();
                mixer_Computer.clipAction(idleClip_Computer).reset();

                mixer.clipAction(idleClip).clampWhenFinished = true;
                mixer_Computer.clipAction(idleClip_Computer).clampWhenFinished = true;

                action.play();
                action_Computer.play();

                var clock = new THREE.Clock();

                animate();

                function animate() {
                    var dt = clock.getDelta();
                    mixer.update(dt);
                    mixer_Computer.update(dt);
                    requestAnimationFrame(animate);
                }
            }

            function idleAnimation_Mike() {
                const clips = gltf.animations;

                const idleClip = clips.find(clip => clip.name.includes("Mike_Idle"));

                //Perso_Assets
                const idleClip_Pen = clips.find(clip => clip.name.includes("MikePen_Idle"));
                const idleClip_Paper = clips.find(clip => clip.name.includes("MikePaper_Idle"));


                Mike.animations.push(idleClip);
                Mike_Pen.animations.push(idleClip_Pen);
                Mike_Paper.animations.push(idleClip_Paper);

                const mixer = new THREE.AnimationMixer(Mike);
                const mixer_Pen = new THREE.AnimationMixer(Mike_Pen);
                const mixer_Paper = new THREE.AnimationMixer(Mike_Paper);

                const action = mixer.clipAction(idleClip);
                const action_Pen = mixer_Pen.clipAction(idleClip_Pen);
                const action_Paper = mixer_Paper.clipAction(idleClip_Paper);

                mixer.clipAction(idleClip).reset();
                mixer_Pen.clipAction(idleClip_Pen).reset();
                mixer_Paper.clipAction(idleClip_Paper).reset();

                mixer.clipAction(idleClip).clampWhenFinished = true;
                mixer_Pen.clipAction(idleClip_Pen).clampWhenFinished = true;
                mixer_Paper.clipAction(idleClip_Paper).clampWhenFinished = true;

                action.play();
                action_Pen.play();
                action_Paper.play();

                var clock = new THREE.Clock();

                animate();

                function animate() {
                    var dt = clock.getDelta();
                    mixer.update(dt);
                    mixer_Pen.update(dt);
                    mixer_Paper.update(dt);
                    requestAnimationFrame(animate);
                }
            }

            /*function onClick(event) {
            //event.preventDefault();
            
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            //console.log("X : ", mouse.x);
            //console.log("Y : ", mouse.y);
            
            raycaster.setFromCamera(mouse, camera);

            
            const hasPerso = intersects.find(intersect => intersect.object.name.toLowerCase() === "isaac");
            //const hasPerso = intersects.some(intersect => persoAssets.includes(intersect.object));
            //const hasPerso = persoAssets.includes(intersects[0]);

            //console.log("Intersection : ");
            //console.dir(intersects);
            //console.dir(hasPerso);
            
            if (hasPerso) {
                helloAnimation();
                
                function helloAnimation() {
                    const character = model.children[0];
                    const clips = gltf.animations;
                    
                    const helloClip = clips.find(clip => clip.name.includes("Hello"));
                    character.animations.push(helloClip);
                    
                    //console.log(character);

                    const mixer = new THREE.AnimationMixer(character);
                    mixer.clipAction(helloClip).loop = THREE.LoopOnce;

                    const action = mixer.clipAction(helloClip);

                    mixer.clipAction(helloClip).reset();
                    mixer.clipAction(helloClip).clampWhenFinished = true;
                    action.play();

                    var clock = new THREE.Clock();
                    
                    animate();
                    
                    function animate() {
                        var dt = clock.getDelta();
                        mixer.update(dt*2);
                        requestAnimationFrame(animate);
                    }
                }
            } else {
                console.error("no clickable object");
            };
        }
        window.addEventListener('click', onClick, {passive: true});
*/

            const mouse = new THREE.Vector2();
            const target = new THREE.Vector2();
            const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

            animateRotation();

            document.addEventListener('mousemove', onMouseMove, false);

            function onMouseMove(event) {

                mouse.x = (event.clientX - windowHalf.x);
                mouse.y = (event.clientY - windowHalf.x);

            }

            function animateRotation() {

                target.x = (1 - mouse.x) * 0.0003;
                target.y = (1 - mouse.y) * 0.0003;

                model.rotation.x += 0.05 * (target.y - model.rotation.x);
                model.rotation.y += 0.05 * (target.x - model.rotation.y);

                //console.log("X : " + camera.rotation.x);
                //console.log("Y : " + camera.rotation.y);

                requestAnimationFrame(animateRotation);
                renderer.render(scene, camera);

            }


        }, undefined,
        function (error) {
            console.error(error);
        });
};