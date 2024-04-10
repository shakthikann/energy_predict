const data = ["generation_biomass", "generation_fossil_brown_coal_lignite", "generation_fossil_coal_derived_gas",
                          "generation_fossil_gas", "generation_fossil_hard_coal", "generation_fossil_oil",
                          "generation_fossil_oil_shale", "generation_fossil_peat", "generation_geothermal",
                          "generation_hydro_pumped_storage_consumption", "generation_hydro_run_of_river_and_poundage",
                          "generation_hydro_water_reservoir", "generation_marine", "generation_nuclear", "generation_other",
                          "generation_other_renewable", "generation_solar", "generation_waste", "generation_wind_offshore",
                          "generation_wind_onshore", "forecast_solar_day_ahead", "forecast_wind_onshore_day_ahead",
                          "total_load_forecast", "total_load_actual", "price_day_ahead", "price_actual"];
        

 const url = "https://kingsengg-edu.ap-south-1.modelbit.com/v1/predict_water_potability/latest";
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      };

      fetch(url, options)
        .then(response => response.json())
        .then(responseJson => {
          renderWaterQualityResult(responseJson);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    
    function renderEnergyQualityResult(prediction) {
      const resultBox = document.getElementById('predictionResult');
      resultBox.innerText = prediction.data;
      resultBox.style.display = 'block';

      // Display potability result box if value is greater than 0.7
      const potabilityBox = document.getElementById('potabilityResult');
      if (prediction.data > 0.7) {
        potabilityBox.innerText = 'Price Acutal';
        potabilityBox.style.display = 'block';
      } else {
        potabilityBox.style.display = 'Error';
      }
    }

    document.getElementById('submitBtn').addEventListener('click', predictPotability);
  </script>