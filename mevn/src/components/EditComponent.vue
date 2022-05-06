<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Surname</label>
                    <input type="text" class="form-control" v-model="student.surname" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="student.firstname" required>
                </div>
                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="student.middlename" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label>Student Number</label>
                    <input type="text" class="form-control" v-model="student.number" required>
                </div>
                <div class="form-group">
                    <label>Course</label>
                    <input type="text" class="form-control" v-model="student.course" required>
                </div>
                <div class="form-group">
                    <label>Year Level</label>
                    <input type="text" class="form-control" v-model="student.year" required>
                </div><div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="student.gender" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            student: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.student = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;
            axios.put(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>