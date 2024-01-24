<script setup>
    import {ref} from 'vue'
    import {userPwdUpdateService} from "@/api/user.js";
    import {ElMessage,ElMessageBox} from "element-plus";
    import {useRouter} from 'vue-router'
    const router = useRouter()
    import {useTokenStore} from'@/stores/token.js'
    const tokenStore = useTokenStore()
    const pdata =ref ({
        old_pwd:'',
        new_pwd:'',
        re_pwd:''
    })
    const checkRePassword = (rule,value,callback) => {
        if (value === ''){
          callback(new Error('请再次确认密码'))
        }else if (value !== pdata.value.new_pwd){
          callback(new Error('请确保两次输入的密码一样'))
        }else{
          callback()
        }
    }
    const rules = {
      old_pwd:[
          { required:true,message:'请输入旧密码',trigger:'blur'},
        {pattern:/^\S{5,16}$/,message: '请输入5-16位非空密码',trigger: 'blur'}
      ],
      new_pwd:[
        {required:true,message:'请输入新密码',trigger:'blur'},
        {pattern:/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).{5,16}$/,message: '请输入同时带有大小写字母,数字,特殊字符的5位以上密码',trigger: 'blur'}
      ],
      re_pwd:[
        { validator: checkRePassword, trigger: 'blur' }
      ]
    }
    const submit = () => {
      ElMessageBox.confirm(
          '请确认是否提交',
          '温馨提示',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }
      ).then(async ()=>{
        let result = await userPwdUpdateService(pdata.value)
        ElMessage({
          type:"success",
          message:'修改成功'
        })
        tokenStore.removeToken()
        router.push('/login')
      }).catch(()=>{
        ElMessage({
          type:"info",
          message:'取消修改'
        })
      })


    }
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>重置密码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form ref="form" :model="pdata" :rules="rules" label-width="100px" size="large">
          <el-form-item label="旧密码" prop="old_pwd">
            <el-input type="password" v-model="pdata.old_pwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input type="password" v-model="pdata.new_pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="re_pwd">
            <el-input type="password" v-model="pdata.re_pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">确认</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>
