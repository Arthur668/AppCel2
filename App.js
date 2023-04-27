import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import expoimg from './assets/expo1.png'
import qrimg from './assets/qr.png'
import snack from './assets/snack.png'
import home1 from './assets/home.png'
import conf from './assets/conf.png'
export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <Text style={styles.ex}>Expo Go </Text>
            <View style={styles.fundoex}>
              <Image source={expoimg} style={styles.expoimg1}/>
            </View>
             <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.develop}>
        <Text style={styles.dev}>Development Servers</Text>
        <Text style={styles.help}>HELP</Text>
        </View>
        <TouchableOpacity style={styles.maincont}>
       <Text style={styles.txt1maincont}>Press here to sing in to your Expo account{'\n'}
        and see the projects you have recently{'\n'}been working on.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.maincont2}>
        <Text style={styles.txt2maincont}> >   Enter URL manualy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.maincont3}>
        <Text style={styles.txt3maincont}>Scan QR code</Text>
        <Image source={qrimg} style={styles.qrimage1}/>
        </TouchableOpacity>
        <View style={styles.midtxt}>
       
          <Text style={styles.rcopn}>Recently opened</Text>
        
        <TouchableOpacity style={styles.clea}>
        <Text style={styles.clear}>CLEAR</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submain}>
        <Text style={styles.subconttxt}>Snack</Text>
        <View style={styles.snimg}>
        <Image source={snack} style={styles.snackimg}/>
        <Text style={styles.seta}> > </Text>
        <View style={styles.ch}>
          <Text style={styles.ch1}>Channel:default </Text>
        </View>
        </View>

        
        </TouchableOpacity>
        
        <View style={styles.footer}>
        <TouchableOpacity style={styles.to}>
        <Image source={home1} style={styles.homeimg}/>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.tou}>
        <Image source={conf} style={styles.comfimg}/>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#0D1017',
  },
  header:{
    alignItens:'center',
    display:'flex',
    width:'100%',
    height:50,
    backgroundColor:'#161B21',
    borderColor:'#30343D',
    borderTop:0,
    borderRight:0,
    borderLeft:0,
    borderWidth:1,

  },
  ex:{
    position:'relative',
    left:50,
    top:15,
    fontWeight:'bolder',
    color:'#d3d3d3'
  },

  fundoex:{
    position:'relative',
    bottom:7,
    left:7,
    width:30,
    height:30,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#21262C',
    backgroundColor:'#21262C',
  },
  expoimg1:{
    position: 'relative',
    left:4,
    top:4,
    alignItens:'center',
    justifyContent:'center',
    width:20,
    height:20,
},
  button:{
    width:'fit-content',
    position:'relative',
    padding:4,
    left:260,
    bottom:32,
    backgroundColor:'#161B21',
    boder:1,
    borderWidth:1,
    borderRadius:3,
    borderColor:'#484F58',
  },
  buttontxt:{
    color:'#C9D2D9',
    fontWeight:'bolder'
  },
  dev:{
    position:'relative',
    top:20,
    left:20,
    fontWeight:'bolder',
    color:'#8B939E'
  },
  help:{
    position:'relative',
    left:250,
    top:4,
    fontWeight:'bolder',
    color:'#8B939E',
    
  },
  develop:{
    width:'100%',
  },
  maincont:{
    position: 'relative',
    top:30,
    left:10,
    width:'95%',
    height:'12%',
    backgroundColor:'#161B21',
    borderWidth:1,
    borderColor:'#484F58',
    borderTopRightRadius:12,
    borderTopLeftRadius:12,
    justifyContent:'center',
    alignItens:'center'

  },
  txt1maincont:{
    position:'relative',
    left:13,
    color:'#8B939E',
    fontWeight:'600',
  },
  maincont2:{
    position: 'relative',
    top:30,
    left:10,
    width:'95%',
    height:'7%',
    backgroundColor:'#161B21',
    borderWidth:1,
    borderColor:'#484F58',
    justifyContent:'center',
    alignItens:'center',
    paddingLeft:15,
  },
  txt2maincont:{
    fontWeight:'600',
    color:'#8B939E'
  },
  maincont3:{
    position: 'relative',
    top:30,
    left:10,
    width:'95%',
    height:'7%',
    backgroundColor:'#161B21',
    borderWidth:1,
    borderColor:'#484F58',
    justifyContent:'center',
    alignItens:'center',
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
  },
  txt3maincont:{
    position: 'relative',
    left:40,
    top:9,
    fontWeight:'600',
    color:'#8B939E'
  },
  qrimage1:{
   position:'relative',
   bottom:8,
    width:20,
    height:20,
    left:10,
  },

  footer:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'9%',
    backgroundColor:'#161B21'
  },
  midtxt:{
   position:'relative',
   top:60,
   left:30,
    width:'100%',
    display:'flex'
  },
  rcopn:{
    fontWeight:'600',
    color:'#8B939E'
  },
  clear:{
   position:'relative',
   left:220,
   bottom:14,
    fontWeight:'600',
    color:'#8B939E'
  },
  homeimg:{
    position:'relative',
    left:70,
    top:10,
    width:50,
    height:50,
  },
  comfimg:{
    position:'relative',
    bottom:40,
    left:220,
  },
  submain:{
    position:'relative',
    top:70,
    left:10,
    width:'95%',
    height:'10%',
    backgroundColor:'#161B21',
    borderWidth:1,
    borderColor:'#494E57',
    borderRadius:10,
  },
  subconttxt:{
    position:'relative',
    left:85,
    top:11,
    fontWeight:'bolder',
    color:'#8B939E',

  },
  snackimg:{
    position:'relative',
    left:5,
    top:5,
    width:40,
    height:40,
  },
  
  snimg:{
    position:'relative',
    left:20,
    bottom:5,
    backgroundColor:'white',
    width:50,
    height:50,
    borderRadius:10,
  },
  seta:{
    position:'relative',
    left:260,
    bottom:20,
    fontSize:'large',
    fontWeight:'bold',
    color:'#8B939E',
  },
  ch:{
    position:'relative',
    left:65,
    bottom:33,
    backgroundColor:'#173365',
    borderWidth:1,
    borderRadius:5,
    width:120,
    height:'40',
    padding:5,
    borderColor:'#173365'
  },
  ch1:{
    color:'#ADD4FD',
    
  },
  to:{
    width:'fit-content',
  }
});
