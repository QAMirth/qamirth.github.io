/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 164.0, "minX": 0.0, "maxY": 1240.0, "series": [{"data": [[0.0, 164.0], [0.1, 164.0], [0.2, 164.0], [0.3, 164.0], [0.4, 164.0], [0.5, 164.0], [0.6, 164.0], [0.7, 164.0], [0.8, 164.0], [0.9, 164.0], [1.0, 165.0], [1.1, 165.0], [1.2, 165.0], [1.3, 165.0], [1.4, 165.0], [1.5, 165.0], [1.6, 165.0], [1.7, 165.0], [1.8, 165.0], [1.9, 165.0], [2.0, 168.0], [2.1, 168.0], [2.2, 168.0], [2.3, 168.0], [2.4, 168.0], [2.5, 168.0], [2.6, 168.0], [2.7, 168.0], [2.8, 168.0], [2.9, 168.0], [3.0, 168.0], [3.1, 168.0], [3.2, 168.0], [3.3, 168.0], [3.4, 168.0], [3.5, 168.0], [3.6, 168.0], [3.7, 168.0], [3.8, 168.0], [3.9, 168.0], [4.0, 172.0], [4.1, 172.0], [4.2, 172.0], [4.3, 172.0], [4.4, 172.0], [4.5, 172.0], [4.6, 172.0], [4.7, 172.0], [4.8, 172.0], [4.9, 172.0], [5.0, 173.0], [5.1, 173.0], [5.2, 173.0], [5.3, 173.0], [5.4, 173.0], [5.5, 173.0], [5.6, 173.0], [5.7, 173.0], [5.8, 173.0], [5.9, 173.0], [6.0, 173.0], [6.1, 173.0], [6.2, 173.0], [6.3, 173.0], [6.4, 173.0], [6.5, 173.0], [6.6, 173.0], [6.7, 173.0], [6.8, 173.0], [6.9, 173.0], [7.0, 174.0], [7.1, 174.0], [7.2, 174.0], [7.3, 174.0], [7.4, 174.0], [7.5, 174.0], [7.6, 174.0], [7.7, 174.0], [7.8, 174.0], [7.9, 174.0], [8.0, 176.0], [8.1, 176.0], [8.2, 176.0], [8.3, 176.0], [8.4, 176.0], [8.5, 176.0], [8.6, 176.0], [8.7, 176.0], [8.8, 176.0], [8.9, 176.0], [9.0, 176.0], [9.1, 176.0], [9.2, 176.0], [9.3, 176.0], [9.4, 176.0], [9.5, 176.0], [9.6, 176.0], [9.7, 176.0], [9.8, 176.0], [9.9, 176.0], [10.0, 177.0], [10.1, 177.0], [10.2, 177.0], [10.3, 177.0], [10.4, 177.0], [10.5, 177.0], [10.6, 177.0], [10.7, 177.0], [10.8, 177.0], [10.9, 177.0], [11.0, 178.0], [11.1, 178.0], [11.2, 178.0], [11.3, 178.0], [11.4, 178.0], [11.5, 178.0], [11.6, 178.0], [11.7, 178.0], [11.8, 178.0], [11.9, 178.0], [12.0, 178.0], [12.1, 178.0], [12.2, 178.0], [12.3, 178.0], [12.4, 178.0], [12.5, 178.0], [12.6, 178.0], [12.7, 178.0], [12.8, 178.0], [12.9, 178.0], [13.0, 179.0], [13.1, 179.0], [13.2, 179.0], [13.3, 179.0], [13.4, 179.0], [13.5, 179.0], [13.6, 179.0], [13.7, 179.0], [13.8, 179.0], [13.9, 179.0], [14.0, 179.0], [14.1, 179.0], [14.2, 179.0], [14.3, 179.0], [14.4, 179.0], [14.5, 179.0], [14.6, 179.0], [14.7, 179.0], [14.8, 179.0], [14.9, 179.0], [15.0, 180.0], [15.1, 180.0], [15.2, 180.0], [15.3, 180.0], [15.4, 180.0], [15.5, 180.0], [15.6, 180.0], [15.7, 180.0], [15.8, 180.0], [15.9, 180.0], [16.0, 180.0], [16.1, 180.0], [16.2, 180.0], [16.3, 180.0], [16.4, 180.0], [16.5, 180.0], [16.6, 180.0], [16.7, 180.0], [16.8, 180.0], [16.9, 180.0], [17.0, 180.0], [17.1, 180.0], [17.2, 180.0], [17.3, 180.0], [17.4, 180.0], [17.5, 180.0], [17.6, 180.0], [17.7, 180.0], [17.8, 180.0], [17.9, 180.0], [18.0, 181.0], [18.1, 181.0], [18.2, 181.0], [18.3, 181.0], [18.4, 181.0], [18.5, 181.0], [18.6, 181.0], [18.7, 181.0], [18.8, 181.0], [18.9, 181.0], [19.0, 181.0], [19.1, 181.0], [19.2, 181.0], [19.3, 181.0], [19.4, 181.0], [19.5, 181.0], [19.6, 181.0], [19.7, 181.0], [19.8, 181.0], [19.9, 181.0], [20.0, 181.0], [20.1, 181.0], [20.2, 181.0], [20.3, 181.0], [20.4, 181.0], [20.5, 181.0], [20.6, 181.0], [20.7, 181.0], [20.8, 181.0], [20.9, 181.0], [21.0, 181.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 181.0], [21.5, 181.0], [21.6, 181.0], [21.7, 181.0], [21.8, 181.0], [21.9, 181.0], [22.0, 181.0], [22.1, 181.0], [22.2, 181.0], [22.3, 181.0], [22.4, 181.0], [22.5, 181.0], [22.6, 181.0], [22.7, 181.0], [22.8, 181.0], [22.9, 181.0], [23.0, 181.0], [23.1, 181.0], [23.2, 181.0], [23.3, 181.0], [23.4, 181.0], [23.5, 181.0], [23.6, 181.0], [23.7, 181.0], [23.8, 181.0], [23.9, 181.0], [24.0, 182.0], [24.1, 182.0], [24.2, 182.0], [24.3, 182.0], [24.4, 182.0], [24.5, 182.0], [24.6, 182.0], [24.7, 182.0], [24.8, 182.0], [24.9, 182.0], [25.0, 183.0], [25.1, 183.0], [25.2, 183.0], [25.3, 183.0], [25.4, 183.0], [25.5, 183.0], [25.6, 183.0], [25.7, 183.0], [25.8, 183.0], [25.9, 183.0], [26.0, 183.0], [26.1, 183.0], [26.2, 183.0], [26.3, 183.0], [26.4, 183.0], [26.5, 183.0], [26.6, 183.0], [26.7, 183.0], [26.8, 183.0], [26.9, 183.0], [27.0, 183.0], [27.1, 183.0], [27.2, 183.0], [27.3, 183.0], [27.4, 183.0], [27.5, 183.0], [27.6, 183.0], [27.7, 183.0], [27.8, 183.0], [27.9, 183.0], [28.0, 183.0], [28.1, 183.0], [28.2, 183.0], [28.3, 183.0], [28.4, 183.0], [28.5, 183.0], [28.6, 183.0], [28.7, 183.0], [28.8, 183.0], [28.9, 183.0], [29.0, 185.0], [29.1, 185.0], [29.2, 185.0], [29.3, 185.0], [29.4, 185.0], [29.5, 185.0], [29.6, 185.0], [29.7, 185.0], [29.8, 185.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 185.0], [30.3, 185.0], [30.4, 185.0], [30.5, 185.0], [30.6, 185.0], [30.7, 185.0], [30.8, 185.0], [30.9, 185.0], [31.0, 185.0], [31.1, 185.0], [31.2, 185.0], [31.3, 185.0], [31.4, 185.0], [31.5, 185.0], [31.6, 185.0], [31.7, 185.0], [31.8, 185.0], [31.9, 185.0], [32.0, 185.0], [32.1, 185.0], [32.2, 185.0], [32.3, 185.0], [32.4, 185.0], [32.5, 185.0], [32.6, 185.0], [32.7, 185.0], [32.8, 185.0], [32.9, 185.0], [33.0, 186.0], [33.1, 186.0], [33.2, 186.0], [33.3, 186.0], [33.4, 186.0], [33.5, 186.0], [33.6, 186.0], [33.7, 186.0], [33.8, 186.0], [33.9, 186.0], [34.0, 186.0], [34.1, 186.0], [34.2, 186.0], [34.3, 186.0], [34.4, 186.0], [34.5, 186.0], [34.6, 186.0], [34.7, 186.0], [34.8, 186.0], [34.9, 186.0], [35.0, 187.0], [35.1, 187.0], [35.2, 187.0], [35.3, 187.0], [35.4, 187.0], [35.5, 187.0], [35.6, 187.0], [35.7, 187.0], [35.8, 187.0], [35.9, 187.0], [36.0, 187.0], [36.1, 187.0], [36.2, 187.0], [36.3, 187.0], [36.4, 187.0], [36.5, 187.0], [36.6, 187.0], [36.7, 187.0], [36.8, 187.0], [36.9, 187.0], [37.0, 188.0], [37.1, 188.0], [37.2, 188.0], [37.3, 188.0], [37.4, 188.0], [37.5, 188.0], [37.6, 188.0], [37.7, 188.0], [37.8, 188.0], [37.9, 188.0], [38.0, 188.0], [38.1, 188.0], [38.2, 188.0], [38.3, 188.0], [38.4, 188.0], [38.5, 188.0], [38.6, 188.0], [38.7, 188.0], [38.8, 188.0], [38.9, 188.0], [39.0, 188.0], [39.1, 188.0], [39.2, 188.0], [39.3, 188.0], [39.4, 188.0], [39.5, 188.0], [39.6, 188.0], [39.7, 188.0], [39.8, 188.0], [39.9, 188.0], [40.0, 188.0], [40.1, 188.0], [40.2, 188.0], [40.3, 188.0], [40.4, 188.0], [40.5, 188.0], [40.6, 188.0], [40.7, 188.0], [40.8, 188.0], [40.9, 188.0], [41.0, 190.0], [41.1, 190.0], [41.2, 190.0], [41.3, 190.0], [41.4, 190.0], [41.5, 190.0], [41.6, 190.0], [41.7, 190.0], [41.8, 190.0], [41.9, 190.0], [42.0, 191.0], [42.1, 191.0], [42.2, 191.0], [42.3, 191.0], [42.4, 191.0], [42.5, 191.0], [42.6, 191.0], [42.7, 191.0], [42.8, 191.0], [42.9, 191.0], [43.0, 191.0], [43.1, 191.0], [43.2, 191.0], [43.3, 191.0], [43.4, 191.0], [43.5, 191.0], [43.6, 191.0], [43.7, 191.0], [43.8, 191.0], [43.9, 191.0], [44.0, 192.0], [44.1, 192.0], [44.2, 192.0], [44.3, 192.0], [44.4, 192.0], [44.5, 192.0], [44.6, 192.0], [44.7, 192.0], [44.8, 192.0], [44.9, 192.0], [45.0, 192.0], [45.1, 192.0], [45.2, 192.0], [45.3, 192.0], [45.4, 192.0], [45.5, 192.0], [45.6, 192.0], [45.7, 192.0], [45.8, 192.0], [45.9, 192.0], [46.0, 192.0], [46.1, 192.0], [46.2, 192.0], [46.3, 192.0], [46.4, 192.0], [46.5, 192.0], [46.6, 192.0], [46.7, 192.0], [46.8, 192.0], [46.9, 192.0], [47.0, 192.0], [47.1, 192.0], [47.2, 192.0], [47.3, 192.0], [47.4, 192.0], [47.5, 192.0], [47.6, 192.0], [47.7, 192.0], [47.8, 192.0], [47.9, 192.0], [48.0, 192.0], [48.1, 192.0], [48.2, 192.0], [48.3, 192.0], [48.4, 192.0], [48.5, 192.0], [48.6, 192.0], [48.7, 192.0], [48.8, 192.0], [48.9, 192.0], [49.0, 192.0], [49.1, 192.0], [49.2, 192.0], [49.3, 192.0], [49.4, 192.0], [49.5, 192.0], [49.6, 192.0], [49.7, 192.0], [49.8, 192.0], [49.9, 192.0], [50.0, 192.0], [50.1, 192.0], [50.2, 192.0], [50.3, 192.0], [50.4, 192.0], [50.5, 192.0], [50.6, 192.0], [50.7, 192.0], [50.8, 192.0], [50.9, 192.0], [51.0, 193.0], [51.1, 193.0], [51.2, 193.0], [51.3, 193.0], [51.4, 193.0], [51.5, 193.0], [51.6, 193.0], [51.7, 193.0], [51.8, 193.0], [51.9, 193.0], [52.0, 193.0], [52.1, 193.0], [52.2, 193.0], [52.3, 193.0], [52.4, 193.0], [52.5, 193.0], [52.6, 193.0], [52.7, 193.0], [52.8, 193.0], [52.9, 193.0], [53.0, 193.0], [53.1, 193.0], [53.2, 193.0], [53.3, 193.0], [53.4, 193.0], [53.5, 193.0], [53.6, 193.0], [53.7, 193.0], [53.8, 193.0], [53.9, 193.0], [54.0, 194.0], [54.1, 194.0], [54.2, 194.0], [54.3, 194.0], [54.4, 194.0], [54.5, 194.0], [54.6, 194.0], [54.7, 194.0], [54.8, 194.0], [54.9, 194.0], [55.0, 194.0], [55.1, 194.0], [55.2, 194.0], [55.3, 194.0], [55.4, 194.0], [55.5, 194.0], [55.6, 194.0], [55.7, 194.0], [55.8, 194.0], [55.9, 194.0], [56.0, 194.0], [56.1, 194.0], [56.2, 194.0], [56.3, 194.0], [56.4, 194.0], [56.5, 194.0], [56.6, 194.0], [56.7, 194.0], [56.8, 194.0], [56.9, 194.0], [57.0, 195.0], [57.1, 195.0], [57.2, 195.0], [57.3, 195.0], [57.4, 195.0], [57.5, 195.0], [57.6, 195.0], [57.7, 195.0], [57.8, 195.0], [57.9, 195.0], [58.0, 195.0], [58.1, 195.0], [58.2, 195.0], [58.3, 195.0], [58.4, 195.0], [58.5, 195.0], [58.6, 195.0], [58.7, 195.0], [58.8, 195.0], [58.9, 195.0], [59.0, 196.0], [59.1, 196.0], [59.2, 196.0], [59.3, 196.0], [59.4, 196.0], [59.5, 196.0], [59.6, 196.0], [59.7, 196.0], [59.8, 196.0], [59.9, 196.0], [60.0, 196.0], [60.1, 196.0], [60.2, 196.0], [60.3, 196.0], [60.4, 196.0], [60.5, 196.0], [60.6, 196.0], [60.7, 196.0], [60.8, 196.0], [60.9, 196.0], [61.0, 196.0], [61.1, 196.0], [61.2, 196.0], [61.3, 196.0], [61.4, 196.0], [61.5, 196.0], [61.6, 196.0], [61.7, 196.0], [61.8, 196.0], [61.9, 196.0], [62.0, 199.0], [62.1, 199.0], [62.2, 199.0], [62.3, 199.0], [62.4, 199.0], [62.5, 199.0], [62.6, 199.0], [62.7, 199.0], [62.8, 199.0], [62.9, 199.0], [63.0, 199.0], [63.1, 199.0], [63.2, 199.0], [63.3, 199.0], [63.4, 199.0], [63.5, 199.0], [63.6, 199.0], [63.7, 199.0], [63.8, 199.0], [63.9, 199.0], [64.0, 199.0], [64.1, 199.0], [64.2, 199.0], [64.3, 199.0], [64.4, 199.0], [64.5, 199.0], [64.6, 199.0], [64.7, 199.0], [64.8, 199.0], [64.9, 199.0], [65.0, 200.0], [65.1, 200.0], [65.2, 200.0], [65.3, 200.0], [65.4, 200.0], [65.5, 200.0], [65.6, 200.0], [65.7, 200.0], [65.8, 200.0], [65.9, 200.0], [66.0, 201.0], [66.1, 201.0], [66.2, 201.0], [66.3, 201.0], [66.4, 201.0], [66.5, 201.0], [66.6, 201.0], [66.7, 201.0], [66.8, 201.0], [66.9, 201.0], [67.0, 202.0], [67.1, 202.0], [67.2, 202.0], [67.3, 202.0], [67.4, 202.0], [67.5, 202.0], [67.6, 202.0], [67.7, 202.0], [67.8, 202.0], [67.9, 202.0], [68.0, 202.0], [68.1, 202.0], [68.2, 202.0], [68.3, 202.0], [68.4, 202.0], [68.5, 202.0], [68.6, 202.0], [68.7, 202.0], [68.8, 202.0], [68.9, 202.0], [69.0, 203.0], [69.1, 203.0], [69.2, 203.0], [69.3, 203.0], [69.4, 203.0], [69.5, 203.0], [69.6, 203.0], [69.7, 203.0], [69.8, 203.0], [69.9, 203.0], [70.0, 203.0], [70.1, 203.0], [70.2, 203.0], [70.3, 203.0], [70.4, 203.0], [70.5, 203.0], [70.6, 203.0], [70.7, 203.0], [70.8, 203.0], [70.9, 203.0], [71.0, 204.0], [71.1, 204.0], [71.2, 204.0], [71.3, 204.0], [71.4, 204.0], [71.5, 204.0], [71.6, 204.0], [71.7, 204.0], [71.8, 204.0], [71.9, 204.0], [72.0, 205.0], [72.1, 205.0], [72.2, 205.0], [72.3, 205.0], [72.4, 205.0], [72.5, 205.0], [72.6, 205.0], [72.7, 205.0], [72.8, 205.0], [72.9, 205.0], [73.0, 205.0], [73.1, 205.0], [73.2, 205.0], [73.3, 205.0], [73.4, 205.0], [73.5, 205.0], [73.6, 205.0], [73.7, 205.0], [73.8, 205.0], [73.9, 205.0], [74.0, 206.0], [74.1, 206.0], [74.2, 206.0], [74.3, 206.0], [74.4, 206.0], [74.5, 206.0], [74.6, 206.0], [74.7, 206.0], [74.8, 206.0], [74.9, 206.0], [75.0, 208.0], [75.1, 208.0], [75.2, 208.0], [75.3, 208.0], [75.4, 208.0], [75.5, 208.0], [75.6, 208.0], [75.7, 208.0], [75.8, 208.0], [75.9, 208.0], [76.0, 208.0], [76.1, 208.0], [76.2, 208.0], [76.3, 208.0], [76.4, 208.0], [76.5, 208.0], [76.6, 208.0], [76.7, 208.0], [76.8, 208.0], [76.9, 208.0], [77.0, 208.0], [77.1, 208.0], [77.2, 208.0], [77.3, 208.0], [77.4, 208.0], [77.5, 208.0], [77.6, 208.0], [77.7, 208.0], [77.8, 208.0], [77.9, 208.0], [78.0, 210.0], [78.1, 210.0], [78.2, 210.0], [78.3, 210.0], [78.4, 210.0], [78.5, 210.0], [78.6, 210.0], [78.7, 210.0], [78.8, 210.0], [78.9, 210.0], [79.0, 211.0], [79.1, 211.0], [79.2, 211.0], [79.3, 211.0], [79.4, 211.0], [79.5, 211.0], [79.6, 211.0], [79.7, 211.0], [79.8, 211.0], [79.9, 211.0], [80.0, 211.0], [80.1, 211.0], [80.2, 211.0], [80.3, 211.0], [80.4, 211.0], [80.5, 211.0], [80.6, 211.0], [80.7, 211.0], [80.8, 211.0], [80.9, 211.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 213.0], [81.5, 213.0], [81.6, 213.0], [81.7, 213.0], [81.8, 213.0], [81.9, 213.0], [82.0, 215.0], [82.1, 215.0], [82.2, 215.0], [82.3, 215.0], [82.4, 215.0], [82.5, 215.0], [82.6, 215.0], [82.7, 215.0], [82.8, 215.0], [82.9, 215.0], [83.0, 219.0], [83.1, 219.0], [83.2, 219.0], [83.3, 219.0], [83.4, 219.0], [83.5, 219.0], [83.6, 219.0], [83.7, 219.0], [83.8, 219.0], [83.9, 219.0], [84.0, 225.0], [84.1, 225.0], [84.2, 225.0], [84.3, 225.0], [84.4, 225.0], [84.5, 225.0], [84.6, 225.0], [84.7, 225.0], [84.8, 225.0], [84.9, 225.0], [85.0, 230.0], [85.1, 230.0], [85.2, 230.0], [85.3, 230.0], [85.4, 230.0], [85.5, 230.0], [85.6, 230.0], [85.7, 230.0], [85.8, 230.0], [85.9, 230.0], [86.0, 233.0], [86.1, 233.0], [86.2, 233.0], [86.3, 233.0], [86.4, 233.0], [86.5, 233.0], [86.6, 233.0], [86.7, 233.0], [86.8, 233.0], [86.9, 233.0], [87.0, 238.0], [87.1, 238.0], [87.2, 238.0], [87.3, 238.0], [87.4, 238.0], [87.5, 238.0], [87.6, 238.0], [87.7, 238.0], [87.8, 238.0], [87.9, 238.0], [88.0, 267.0], [88.1, 267.0], [88.2, 267.0], [88.3, 267.0], [88.4, 267.0], [88.5, 267.0], [88.6, 267.0], [88.7, 267.0], [88.8, 267.0], [88.9, 267.0], [89.0, 339.0], [89.1, 339.0], [89.2, 339.0], [89.3, 339.0], [89.4, 339.0], [89.5, 339.0], [89.6, 339.0], [89.7, 339.0], [89.8, 339.0], [89.9, 339.0], [90.0, 381.0], [90.1, 381.0], [90.2, 381.0], [90.3, 381.0], [90.4, 381.0], [90.5, 381.0], [90.6, 381.0], [90.7, 381.0], [90.8, 381.0], [90.9, 381.0], [91.0, 389.0], [91.1, 389.0], [91.2, 389.0], [91.3, 389.0], [91.4, 389.0], [91.5, 389.0], [91.6, 389.0], [91.7, 389.0], [91.8, 389.0], [91.9, 389.0], [92.0, 409.0], [92.1, 409.0], [92.2, 409.0], [92.3, 409.0], [92.4, 409.0], [92.5, 409.0], [92.6, 409.0], [92.7, 409.0], [92.8, 409.0], [92.9, 409.0], [93.0, 412.0], [93.1, 412.0], [93.2, 412.0], [93.3, 412.0], [93.4, 412.0], [93.5, 412.0], [93.6, 412.0], [93.7, 412.0], [93.8, 412.0], [93.9, 412.0], [94.0, 514.0], [94.1, 514.0], [94.2, 514.0], [94.3, 514.0], [94.4, 514.0], [94.5, 514.0], [94.6, 514.0], [94.7, 514.0], [94.8, 514.0], [94.9, 514.0], [95.0, 570.0], [95.1, 570.0], [95.2, 570.0], [95.3, 570.0], [95.4, 570.0], [95.5, 570.0], [95.6, 570.0], [95.7, 570.0], [95.8, 570.0], [95.9, 570.0], [96.0, 597.0], [96.1, 597.0], [96.2, 597.0], [96.3, 597.0], [96.4, 597.0], [96.5, 597.0], [96.6, 597.0], [96.7, 597.0], [96.8, 597.0], [96.9, 597.0], [97.0, 815.0], [97.1, 815.0], [97.2, 815.0], [97.3, 815.0], [97.4, 815.0], [97.5, 815.0], [97.6, 815.0], [97.7, 815.0], [97.8, 815.0], [97.9, 815.0], [98.0, 1200.0], [98.1, 1200.0], [98.2, 1200.0], [98.3, 1200.0], [98.4, 1200.0], [98.5, 1200.0], [98.6, 1200.0], [98.7, 1200.0], [98.8, 1200.0], [98.9, 1200.0], [99.0, 1240.0], [99.1, 1240.0], [99.2, 1240.0], [99.3, 1240.0], [99.4, 1240.0], [99.5, 1240.0], [99.6, 1240.0], [99.7, 1240.0], [99.8, 1240.0], [99.9, 1240.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 65.0, "series": [{"data": [[300.0, 3.0], [1200.0, 2.0], [200.0, 24.0], [800.0, 1.0], [100.0, 65.0], [400.0, 2.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 94.0, "series": [{"data": [[0.0, 94.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0307692307692307, "minX": 1.72859124E12, "maxY": 1.0857142857142859, "series": [{"data": [[1.7285913E12, 1.0307692307692307], [1.72859124E12, 1.0857142857142859]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285913E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 212.6, "minX": 1.0, "maxY": 765.2, "series": [{"data": [[2.0, 765.2], [1.0, 212.6]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0499999999999998, 240.22999999999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 70.0, "minX": 1.72859124E12, "maxY": 73155.33333333333, "series": [{"data": [[1.7285913E12, 73155.33333333333], [1.72859124E12, 39391.083333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7285913E12, 130.0], [1.72859124E12, 70.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285913E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 225.44615384615378, "minX": 1.72859124E12, "maxY": 267.68571428571437, "series": [{"data": [[1.7285913E12, 225.44615384615378], [1.72859124E12, 267.68571428571437]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285913E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 177.29230769230773, "minX": 1.72859124E12, "maxY": 215.8571428571429, "series": [{"data": [[1.7285913E12, 177.29230769230773], [1.72859124E12, 215.8571428571429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285913E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 128.2, "minX": 1.72859124E12, "maxY": 161.68571428571428, "series": [{"data": [[1.7285913E12, 128.2], [1.72859124E12, 161.68571428571428]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285913E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 164.0, "minX": 1.72859124E12, "maxY": 1240.0, "series": [{"data": [[1.7285913E12, 1240.0], [1.72859124E12, 1200.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7285913E12, 295.7999999999999], [1.72859124E12, 461.39999999999975]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7285913E12, 1240.0], [1.72859124E12, 1200.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7285913E12, 483.3999999999996], [1.72859124E12, 891.9999999999984]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7285913E12, 164.0], [1.72859124E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7285913E12, 188.0], [1.72859124E12, 202.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285913E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 192.0, "minX": 1.0, "maxY": 398.0, "series": [{"data": [[2.0, 192.0], [1.0, 192.5], [3.0, 398.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 147.0, "minX": 1.0, "maxY": 353.5, "series": [{"data": [[2.0, 147.0], [1.0, 148.0], [3.0, 353.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.72859124E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.7285913E12, 1.0833333333333333], [1.72859124E12, 0.5833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285913E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.72859124E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.7285913E12, 1.0833333333333333], [1.72859124E12, 0.5833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285913E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.72859124E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.7285913E12, 1.0833333333333333], [1.72859124E12, 0.5833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285913E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.72859124E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.7285913E12, 1.0833333333333333], [1.72859124E12, 0.5833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285913E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

