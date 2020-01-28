<template>
    <mdb-container fluid>
        <mdb-row>
            <mdb-col md='1'><Panel/></mdb-col>
            <mdb-col md="10">
                <mdb-row class="justify-content-center">
                    <DrawPad class="drawpad"/>
                </mdb-row>
            </mdb-col>
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
    .drawpad{
        border: 2px solid grey;
       
    }
</style>