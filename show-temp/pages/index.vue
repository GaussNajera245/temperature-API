<template>
  <v-container fluid>
    <v-row  style="height: 48vh" >
      <v-col cols="6" >   
        <v-card height="100%" >  Column  </v-card>
      </v-col>

      <v-col cols="6">   
        <v-card height="100%"  >  
          <h3 style="padding:16px">
            Termometer
          </h3> 
          <br> 
          <div style="text-align:center; margin-top=10px"> 
            Waiting for temperature Reading...
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row  style="height: 48vh"  >
      <v-col cols="6">   
        <v-card style="height:100%; background-color: #eaeaea" > 
          <v-card-title>
            Termometer
          </v-card-title> 
          <br> <br> 
          <div style="text-align:center"> 
            Waiting for temperature Reading...
          </div>
        </v-card>
      </v-col>

      <v-col cols="6">   
        <v-card style="height:100%; background-color: #eaeaea" >  
          <v-card-title>
            Termometer
          </v-card-title> 
          <br> <br> 
          <div style="text-align:center"> 
            Waiting for temperature Reading...
          </div>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  import io from 'socket.io-client';

  export default {
    data(){
      return{
        waiting: true,
        socket: io("http://localhost:8001/")
      }
    }
  }
</script>
