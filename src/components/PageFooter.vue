<template>
    <footer>
        <a href="https://github.com/jacksonoviatt">Visit my GitHub</a>
        
        <a href="../assets/ramona_oviatt_resume.png" download>Download Resume</a>
        
        <a href="https://ca.linkedin.com/in/ramona-oviatt">LinkedIn</a>
    </footer>
</template>

<script>
    export default {
        name: "page-footer",

    }
</script>

<style lang="scss" scoped>
    footer {
        height: 40px;
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        padding: 15px;

        a {
            font-weight: bold;
            &:nth-child(3) {
                color: #faa6b2;
            }
            &:nth-child(2) {
                color: #91A666;
            }
            &:nth-child(1) {
                color: #93B5C6;
            }
        }
    }
</style>