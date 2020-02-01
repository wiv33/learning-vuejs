<template>
    <v-container>
        <h1>파일 업로더</h1>
        <input id="file-selector" ref="uploadFile" type="file"
               @change="handleFileUpload()">
        <v-btn @click="uploadFile" color="primary">업로드</v-btn>
    </v-container>
</template>

<script>
    import AWS from 'aws-sdk';

    import {consoleInfo} from "vuetify/es5/util/console";

    export default {
        data() {
            return {
                file: null,
                albumBucketName: "psawesome-photo-album",
                bucketRegion: "ap-northeast-2",
                IdentityPoolId: "Your IdentityPoolId Key",
            }
        },
        methods: {
            handleFileUpload() {
                consoleInfo(AWS);
                this.file = this.$refs.uploadFile.files[0]
                consoleInfo("파일이 업로드 되었습니다.", this.file);
                consoleInfo(this.file);
            },
            uploadFile() {
                AWS.config.update({
                    region: this.bucketRegion,
                    credentials: new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: this.IdentityPoolId
                    })
                });

                // const s3 = new AWS.S3({
                //     apiVersion: "2006-03-01",
                //     params: { Bucket: this.albumBucketName }
                // });

                let photoKey = this.file.name;

                // Use S3 ManagedUpload class as it supports multipart uploads
                const upload = new AWS.S3.ManagedUpload({
                    params: {
                        Bucket: this.albumBucketName,
                        Key: photoKey,
                        Body: this.file,
                        ACL: "public-read"
                    }
                });

                const promise = upload.promise();

                promise.then(
                    (data) => {
                        consoleInfo(data);
                        alert("Successfully uploaded photo.");
                        // viewAlbum(albumName);
                    }
                ).catch(err => alert("There was an error uploading your photo: ", err.message));

            }
        }
    }
</script>

<style scoped>

</style>