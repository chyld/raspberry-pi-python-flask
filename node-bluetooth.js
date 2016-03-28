var noble = require('noble');

noble.on('stateChange', function(state){
  console.log('stateChange:', state);
  if(state === 'poweredOn'){
    console.log('scan: started');
    noble.startScanning();
  }
});

noble.on('discover', function(device){
  console.log('discover:', device.address);
  if(device.address === '98:4f:ee:0f:43:ab'){
    console.log('device: found');
    console.log('scan: stopped');
    noble.stopScanning();
    device.connect(function(err){
      console.log('connection error:', err);
      device.discoverAllServicesAndCharacteristics(function(err, services, characteristics){
        console.log('services error:', err);
        var comm1;
        var comm2;
        // --------------------------------------------------------------- //
        characteristics.forEach(function(ch, chId){
          console.log('characteristic:', ch.uuid);
          if(ch.uuid === '19b10001e8f2537e4f6cd104768a1214'){
            comm1 = ch;
            console.log('characteristic 1: found');
          }
        });
        console.log('data: sending');
        comm1.write(new Buffer('chyld'));
        // --------------------------------------------------------------- //
        characteristics.forEach(function(ch, chId){
          console.log('characteristic:', ch.uuid);
          if(ch.uuid === '19b10002e8f2537e4f6cd104768a1214'){
            comm2 = ch;
            console.log('characteristic 2: found');
          }
        });
        comm2.read(function(err, data){
          console.log('read error:', err);
          console.log('read data:', data);
        });
        // --------------------------------------------------------------- //
      });
    });
  }
});
