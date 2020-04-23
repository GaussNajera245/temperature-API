<template>
  <v-container fluid>
    <v-row  style="height: 48vh" >
      <v-col cols="6" >   
        <v-card height="100%" >  {{sudo}}  </v-card>
      </v-col>

      <v-col cols="6">   
        <v-card height="100%"  >  
          <h3 style="padding:16px">
            {{info}}
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
        socket: io("http://localhost:8001"),
        info:{},
        sudo: 0
      }
    },
    methods:{
      now(){
        const self = this;
        setInterval(async () => {
          self.sudo = self.sudo + 1; 
          await self.socket.on("temperature-data", data => {
            self.info = data;
          })
        /// NO FUNCIONA:VVVVV

        }, 500);
      }
    },
    watch:{
      temp: function(){
        console.log("listen")
      }
    },
    mounted() {
        this.now()
    }
  }
</script>
