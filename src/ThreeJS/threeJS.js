import * as THREE from "three";
import {THREEx} from "threex.domevents"
import {AmbientLight, DirectionalLight, DirectionalLightShadow, HemisphereLight, Int8Attribute,} from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'

import {animate, post} from './post.js';
import loaderPerso from './scene.js';

//Variable d'initialisation
var scene, camera;

post(); //Render camera & post-processing

loaderPerso(); //Render the character

animate();