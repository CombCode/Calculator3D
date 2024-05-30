/* eslint-disable */    //disabled all warnings in a file

import { createApp } from 'vue'
import App from './App.vue'

//three.js imports
import {Camera, Material, Texture} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';  

//three.js recommended css settings
import './main.css'


createApp(App).mount('#app')

