<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Surname</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Email</th>
                        <th>S.N</th>
                        <th>Course</th>
                        <th>Year Level</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in Students" :key="student._id">
                        <td>{{ student.surname }}</td>
                        <td>{{ student.firstname }}</td>
                        <td>{{ student.middlename }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.number }}</td>
                        <td>{{ student.course }}</td>
                        <td>{{ student.year }}</td>
                        <td>{{ student.gender }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Students: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>