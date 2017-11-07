var MAGICCARD_VENDOR_ID = 6408; //0x1908;
var MAGICCARD_PRODUCT_ID = 4896; //0x1320;
var DEVICE_INFO = {"vendorId": MAGICCARD_VENDOR_ID, "productId": MAGICCARD_PRODUCT_ID};

var magiccardDevice;

var transfer = {
  direction: 'in',
  endpoint: 130,
  length: 512
};

var gotPermission = function(result) {
    console.log('App was granted the "usbDevices" permission.');
    chrome.usb.findDevices( DEVICE_INFO,
      function(devices) {
        if (!devices || !devices.length) {
          console.log('device not found');
          return;
        }
        console.log('Found device: ' + devices[0].handle);
        magiccardDevice = devices[0];
        chrome.usb.interruptTransfer(magiccardDevice, transfer, onEvent);
    });
  };

var permissionObj = {permissions: [{'usbDevices': [DEVICE_INFO] }]};

requestButton.addEventListener('click', function() {
  chrome.permissions.request( permissionObj, function(result) {
    if (result) {
      gotPermission();
    } else {
      console.log('App was not granted the "usbDevices" permission.');
      console.log(chrome.runtime.lastError);
    }
  });
});

chrome.permissions.contains(permissionObj, function(result) {
  if (result) {
    gotPermission();
  }
});
