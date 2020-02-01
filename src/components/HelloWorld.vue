<template>
    <v-container>
        <h1>파일 리스트</h1>
        <div v-for="(file, index) in fileList" :key="file.Key">
            #{{index + 1}} {{file.Key}}
            <v-btn @click="deleteFile(file.Key)" color="red" icon>x</v-btn>
        </div>
        <h1>파일 업로더</h1>
        <input id="file-selector" ref="uploadFile" type="file"
               @change="handleFileUpload()">
        <v-btn @click="uploadFile" color="primary">업로드</v-btn>
    </v-container>
</template>

<script>
    import AWS from 'aws-sdk';

    export default {
        data() {
            return {
                s3 : null,
                file: null,
                fileList: [],
                albumBucketName: "psawesome-photo-album",
                bucketRegion: "ap-northeast-2",
                IdentityPoolId: "Your IdentityPoolId Key",
            }
        },
        created() {
            AWS.config.update({
                region: this.bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: this.IdentityPoolId
                })
            });

            this.s3 = new AWS.S3({
                apiVersion: "2006-03-01",
                params: { Bucket: this.albumBucketName }
            });

            this.getFiles();
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.uploadFile.files[0]
                // consoleInfo("파일이 업로드 되었습니다.", this.file);
            },
            uploadFile() {
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
                        alert("Successfully uploaded photo [" + data + "]");
                        this.getFiles();
                        // viewAlbum(albumName);
                    }
                ).catch(err => alert("There was an error uploading your photo: " + err.message));

            },
            getFiles() {
                this.s3.listObjects({ Delimiter: "/" }, (err, data) => {
                    if (err) {
                        return alert("There was an error listing your albums: " + err.message);
                    } else {
                        this.fileList = data.Contents;
                    }
                });
            },
            deleteFile(key) {
                this.s3.deleteObject({ Key: key }, (err, data) => {
                    if (err) {
                        return alert("There was an error deleting your photo: " + err.message);
                    }
                    alert("Successfully deleted photo. [" + data + "]");
                    this.getFiles();
                    // viewAlbum(albumName);
                });
            }
        }
    }
</script>

<style scoped>

</style>