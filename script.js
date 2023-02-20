const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDischargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

//Let's thrilled

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }

    //call to the function
    updateAllBatteryInfo();

    //update the charging state of the battery
    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });

    function updateChargeInfo() {
      batteryCharging.innerHTML = battery.charging ? "Yes" : "No";
    }

    //update the level of the battery
    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });

    function updateLevelInfo() {
      batteryLevel.innerHTML = parseInt(battery.level * 100) + "%";
    }

    //update the charging time of the battery
    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo();
    });

    function updateChargingInfo() {
      batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
    }

    //update the discharging time of the battery
    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo();
    });

    function updateDischargingInfo() {
      batteryDischargingTime.innerHTML = battery.dischargingTime + " seconds";
    }
  });
} else {
  alert("The battery API wasn't found on this navigator");
}
