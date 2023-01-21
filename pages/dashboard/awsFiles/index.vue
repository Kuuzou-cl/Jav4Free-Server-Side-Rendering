<template>
    <div id="wrapper">
        <SidebarAdmin />
        <div id="content-wrapper" class="d-flex flex-column">
            <div class="container">
                <div class="row">
                    <div class="title-admin">
                        <h2>AWS S3 Files</h2>
                    </div>
                </div>
            </div>
            <div class="need-space"></div>
            <div class="need-space"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <input v-model="javFound" type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Jav Found</label>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <input v-model="idolFound" type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Idol Found</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <input v-model="sceneFound" type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Scene Found</label>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <table id="example" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Jav created</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="jav in filterJavs">
                                    <th>{{ jav.file }}</th>
                                    <td>
                                        <font-awesome-icon v-if="jav.state" :icon="['fas', 'file-video']"
                                            class="icon-green" />
                                        <font-awesome-icon v-else :icon="['fas', 'file-video']" class="icon-red" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table id="example" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Idol created</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="idol in filterIdols">
                                    <th>{{ idol.file }}</th>
                                    <td>
                                        <font-awesome-icon v-if="idol.state" :icon="['fas', 'file-video']"
                                            class="icon-green" />
                                        <font-awesome-icon v-else :icon="['fas', 'file-video']" class="icon-red" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <table id="example" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Scene created</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="scene in filterScenes">
                                    <th>{{ scene.file }}</th>
                                    <td>
                                        <font-awesome-icon v-if="scene.state" :icon="['fas', 'file-video']"
                                            class="icon-green" />
                                        <font-awesome-icon v-else :icon="['fas', 'file-video']" class="icon-red" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
    layout: "admin",
    name: "editJavs",
    components: {
        SidebarAdmin,
    },
    data() {
        return {
            searchJavs: "",
            searchScenes: "",
            searchIdols: "",
            filteredJavs: [],
            filteredScenes: [],
            filteredIdols: [],
            javFound: false,
            sceneFound: false,
            idolFound: false
        };
    },
    async asyncData() {
        let aws = await axios.get("https://jav.souzou.dev/aws/getAllNotDB");
        return {
            javs: aws.data.dataJavs,
            scenes: aws.data.dataScenes,
            idols: aws.data.dataIdols
        };
    },
    computed: {
        filterScenes() {
            this.filteredScenes = [];
            this.scenes.forEach((scene) => {
                if (scene.file.toLowerCase().includes(this.searchScenes.toLowerCase())) {
                    if (scene.state == this.sceneFound) {
                        this.filteredScenes.push(scene);
                    }
                }
            });
            return this.filteredScenes;
        },
        filterJavs() {
            this.filteredJavs = [];
            this.javs.forEach((jav) => {
                if (jav.file.toLowerCase().includes(this.searchJavs.toLowerCase())) {
                    if (jav.state == this.javFound) {
                        this.filteredJavs.push(jav);
                    }
                }
            });
            return this.filteredJavs;
        },
        filterIdols() {
            this.filteredIdols = [];
            this.idols.forEach((idol) => {
                if (idol.file.toLowerCase().includes(this.searchIdols.toLowerCase())) {
                    if (idol.state == this.idolFound) {
                        this.filteredIdols.push(idol);
                    }
                }
            });
            return this.filteredIdols;
        },
    }
};
</script>