import {server} from './server/server';


try{
  server.listen(4010).then(({url})=>{
    console.log('running');
  });
}catch(err){

}




