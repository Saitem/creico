<template>
    <mdb-container fluid class="main">
        <mdb-row>
            <mdb-col md='1'><Panel/></mdb-col>
            <mdb-col md="10"><DrawPad/></mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import DrawPad from './main/DrawPad'
import Panel from './main/Panel'


export default {
    components: {
        DrawPad,
        Panel,
        mdbContainer,
        mdbRow,
        mdbCol
    }
}
</script>

<style lang="scss" scoped>
    .main{
        mdb-row{
            margin: 0;
            padding: 0;
        }
        // padding-top: 30px;
    }
</style>