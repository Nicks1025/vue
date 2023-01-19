<template>
    <div>
        <form-helper>
            <div slot = "form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot = "form-fields">
                <input type = "text" placeholder = "name" required/>
                <label>Your Message : </label>
                <textarea></textarea>
            </div>
            <div slot = "form-controls">
                <button>Send</button>
            </div>
            
        </form-helper>
    </div>
</template>

<script>
import formhelper from './formHelper.vue'
    export default {
        components : {
            'form-helper' : formhelper
        },
        data() {
            return {

            }   
        },
        methods :{
        }
    }

</script>

<style scoped>

</style>