<template>
   <div>
        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"           
            :options="options"
        />

        <div class="formContainer">
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                status-icon
                :rules="loginRules"
                label-width="120px"
                class="demo-ruleForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username"  autocomplete="off" />
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>

                <el-form-item>
                    <el-button 
                        type="primary" 
                        @click="submitForm()"
                    >登录</el-button>
                    
                </el-form-item>

            </el-form>
        </div>
   </div>
</template>

<script setup>
import {reactive,ref} from 'vue'
const handleLogin=()=>{
    localStorage.setItem("token","kerwin")
}


const loginForm=reactive({
    username:"",
    password:""
})//表单绑定的响应式对象
const loginFormRef=ref()//表单的引用对象

const loginRules=reactive({
    username:[
        {
            required:true,message:"请输入用户名",trigger:"blur"
        }
    ],
    password:[
        {
            required:true,message:"请输入密码",trigger:"blur"
        }
    ],
})

// 配置login.vue中的背景效果
import { loadSlim } from "tsparticles-slim";

const particlesInit = async engine => {
await loadSlim(engine);
};

const particlesLoaded = async container => {
console.log("Particles container loaded", container);
};
//提交表单函数
const submitForm=()=>{

}
// 配置particles
const options={
                    background: {
                        color: {
                            value: '#2d3a4b'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }

</script>