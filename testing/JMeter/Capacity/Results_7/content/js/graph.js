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
        data: {"result": {"minY": 156.0, "minX": 0.0, "maxY": 3063.0, "series": [{"data": [[0.0, 156.0], [0.1, 161.0], [0.2, 161.0], [0.3, 162.0], [0.4, 163.0], [0.5, 163.0], [0.6, 164.0], [0.7, 164.0], [0.8, 164.0], [0.9, 165.0], [1.0, 165.0], [1.1, 165.0], [1.2, 166.0], [1.3, 166.0], [1.4, 166.0], [1.5, 166.0], [1.6, 166.0], [1.7, 166.0], [1.8, 166.0], [1.9, 167.0], [2.0, 167.0], [2.1, 167.0], [2.2, 167.0], [2.3, 167.0], [2.4, 167.0], [2.5, 167.0], [2.6, 167.0], [2.7, 167.0], [2.8, 168.0], [2.9, 168.0], [3.0, 168.0], [3.1, 168.0], [3.2, 168.0], [3.3, 168.0], [3.4, 168.0], [3.5, 168.0], [3.6, 168.0], [3.7, 168.0], [3.8, 168.0], [3.9, 169.0], [4.0, 169.0], [4.1, 169.0], [4.2, 169.0], [4.3, 169.0], [4.4, 169.0], [4.5, 169.0], [4.6, 169.0], [4.7, 169.0], [4.8, 169.0], [4.9, 169.0], [5.0, 169.0], [5.1, 170.0], [5.2, 170.0], [5.3, 170.0], [5.4, 170.0], [5.5, 170.0], [5.6, 170.0], [5.7, 170.0], [5.8, 170.0], [5.9, 170.0], [6.0, 170.0], [6.1, 170.0], [6.2, 170.0], [6.3, 170.0], [6.4, 170.0], [6.5, 170.0], [6.6, 170.0], [6.7, 171.0], [6.8, 171.0], [6.9, 171.0], [7.0, 171.0], [7.1, 171.0], [7.2, 171.0], [7.3, 171.0], [7.4, 171.0], [7.5, 171.0], [7.6, 171.0], [7.7, 171.0], [7.8, 171.0], [7.9, 171.0], [8.0, 171.0], [8.1, 171.0], [8.2, 171.0], [8.3, 171.0], [8.4, 171.0], [8.5, 171.0], [8.6, 171.0], [8.7, 172.0], [8.8, 172.0], [8.9, 172.0], [9.0, 172.0], [9.1, 172.0], [9.2, 172.0], [9.3, 172.0], [9.4, 172.0], [9.5, 172.0], [9.6, 172.0], [9.7, 172.0], [9.8, 172.0], [9.9, 172.0], [10.0, 172.0], [10.1, 172.0], [10.2, 172.0], [10.3, 172.0], [10.4, 172.0], [10.5, 172.0], [10.6, 172.0], [10.7, 172.0], [10.8, 172.0], [10.9, 172.0], [11.0, 172.0], [11.1, 172.0], [11.2, 172.0], [11.3, 172.0], [11.4, 172.0], [11.5, 172.0], [11.6, 173.0], [11.7, 173.0], [11.8, 173.0], [11.9, 173.0], [12.0, 173.0], [12.1, 173.0], [12.2, 173.0], [12.3, 173.0], [12.4, 173.0], [12.5, 173.0], [12.6, 173.0], [12.7, 173.0], [12.8, 173.0], [12.9, 173.0], [13.0, 173.0], [13.1, 173.0], [13.2, 173.0], [13.3, 173.0], [13.4, 173.0], [13.5, 173.0], [13.6, 173.0], [13.7, 173.0], [13.8, 173.0], [13.9, 173.0], [14.0, 173.0], [14.1, 173.0], [14.2, 173.0], [14.3, 173.0], [14.4, 173.0], [14.5, 174.0], [14.6, 174.0], [14.7, 174.0], [14.8, 174.0], [14.9, 174.0], [15.0, 174.0], [15.1, 174.0], [15.2, 174.0], [15.3, 174.0], [15.4, 174.0], [15.5, 174.0], [15.6, 174.0], [15.7, 174.0], [15.8, 174.0], [15.9, 174.0], [16.0, 174.0], [16.1, 174.0], [16.2, 174.0], [16.3, 174.0], [16.4, 174.0], [16.5, 174.0], [16.6, 174.0], [16.7, 174.0], [16.8, 174.0], [16.9, 174.0], [17.0, 174.0], [17.1, 174.0], [17.2, 174.0], [17.3, 174.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 174.0], [17.8, 174.0], [17.9, 175.0], [18.0, 175.0], [18.1, 175.0], [18.2, 175.0], [18.3, 175.0], [18.4, 175.0], [18.5, 175.0], [18.6, 175.0], [18.7, 175.0], [18.8, 175.0], [18.9, 175.0], [19.0, 175.0], [19.1, 175.0], [19.2, 175.0], [19.3, 175.0], [19.4, 175.0], [19.5, 175.0], [19.6, 175.0], [19.7, 175.0], [19.8, 175.0], [19.9, 175.0], [20.0, 175.0], [20.1, 175.0], [20.2, 175.0], [20.3, 175.0], [20.4, 175.0], [20.5, 175.0], [20.6, 175.0], [20.7, 175.0], [20.8, 175.0], [20.9, 175.0], [21.0, 175.0], [21.1, 175.0], [21.2, 175.0], [21.3, 175.0], [21.4, 175.0], [21.5, 175.0], [21.6, 175.0], [21.7, 175.0], [21.8, 175.0], [21.9, 175.0], [22.0, 175.0], [22.1, 176.0], [22.2, 176.0], [22.3, 176.0], [22.4, 176.0], [22.5, 176.0], [22.6, 176.0], [22.7, 176.0], [22.8, 176.0], [22.9, 176.0], [23.0, 176.0], [23.1, 176.0], [23.2, 176.0], [23.3, 176.0], [23.4, 176.0], [23.5, 176.0], [23.6, 176.0], [23.7, 176.0], [23.8, 176.0], [23.9, 176.0], [24.0, 176.0], [24.1, 176.0], [24.2, 176.0], [24.3, 176.0], [24.4, 176.0], [24.5, 176.0], [24.6, 176.0], [24.7, 176.0], [24.8, 176.0], [24.9, 176.0], [25.0, 176.0], [25.1, 176.0], [25.2, 176.0], [25.3, 176.0], [25.4, 176.0], [25.5, 176.0], [25.6, 176.0], [25.7, 176.0], [25.8, 176.0], [25.9, 176.0], [26.0, 177.0], [26.1, 177.0], [26.2, 177.0], [26.3, 177.0], [26.4, 177.0], [26.5, 177.0], [26.6, 177.0], [26.7, 177.0], [26.8, 177.0], [26.9, 177.0], [27.0, 177.0], [27.1, 177.0], [27.2, 177.0], [27.3, 177.0], [27.4, 177.0], [27.5, 177.0], [27.6, 177.0], [27.7, 177.0], [27.8, 177.0], [27.9, 177.0], [28.0, 177.0], [28.1, 177.0], [28.2, 177.0], [28.3, 177.0], [28.4, 177.0], [28.5, 177.0], [28.6, 177.0], [28.7, 177.0], [28.8, 177.0], [28.9, 177.0], [29.0, 177.0], [29.1, 177.0], [29.2, 177.0], [29.3, 177.0], [29.4, 177.0], [29.5, 177.0], [29.6, 177.0], [29.7, 177.0], [29.8, 177.0], [29.9, 177.0], [30.0, 177.0], [30.1, 177.0], [30.2, 177.0], [30.3, 177.0], [30.4, 177.0], [30.5, 177.0], [30.6, 177.0], [30.7, 177.0], [30.8, 178.0], [30.9, 178.0], [31.0, 178.0], [31.1, 178.0], [31.2, 178.0], [31.3, 178.0], [31.4, 178.0], [31.5, 178.0], [31.6, 178.0], [31.7, 178.0], [31.8, 178.0], [31.9, 178.0], [32.0, 178.0], [32.1, 178.0], [32.2, 178.0], [32.3, 178.0], [32.4, 178.0], [32.5, 178.0], [32.6, 178.0], [32.7, 178.0], [32.8, 178.0], [32.9, 178.0], [33.0, 178.0], [33.1, 178.0], [33.2, 178.0], [33.3, 178.0], [33.4, 178.0], [33.5, 178.0], [33.6, 178.0], [33.7, 178.0], [33.8, 178.0], [33.9, 178.0], [34.0, 178.0], [34.1, 178.0], [34.2, 178.0], [34.3, 178.0], [34.4, 178.0], [34.5, 178.0], [34.6, 178.0], [34.7, 178.0], [34.8, 178.0], [34.9, 178.0], [35.0, 178.0], [35.1, 178.0], [35.2, 178.0], [35.3, 178.0], [35.4, 178.0], [35.5, 179.0], [35.6, 179.0], [35.7, 179.0], [35.8, 179.0], [35.9, 179.0], [36.0, 179.0], [36.1, 179.0], [36.2, 179.0], [36.3, 179.0], [36.4, 179.0], [36.5, 179.0], [36.6, 179.0], [36.7, 179.0], [36.8, 179.0], [36.9, 179.0], [37.0, 179.0], [37.1, 179.0], [37.2, 179.0], [37.3, 179.0], [37.4, 179.0], [37.5, 179.0], [37.6, 179.0], [37.7, 179.0], [37.8, 179.0], [37.9, 179.0], [38.0, 179.0], [38.1, 179.0], [38.2, 179.0], [38.3, 179.0], [38.4, 179.0], [38.5, 179.0], [38.6, 179.0], [38.7, 179.0], [38.8, 179.0], [38.9, 179.0], [39.0, 179.0], [39.1, 179.0], [39.2, 179.0], [39.3, 179.0], [39.4, 179.0], [39.5, 179.0], [39.6, 179.0], [39.7, 179.0], [39.8, 179.0], [39.9, 179.0], [40.0, 179.0], [40.1, 179.0], [40.2, 179.0], [40.3, 179.0], [40.4, 179.0], [40.5, 179.0], [40.6, 180.0], [40.7, 180.0], [40.8, 180.0], [40.9, 180.0], [41.0, 180.0], [41.1, 180.0], [41.2, 180.0], [41.3, 180.0], [41.4, 180.0], [41.5, 180.0], [41.6, 180.0], [41.7, 180.0], [41.8, 180.0], [41.9, 180.0], [42.0, 180.0], [42.1, 180.0], [42.2, 180.0], [42.3, 180.0], [42.4, 180.0], [42.5, 180.0], [42.6, 180.0], [42.7, 180.0], [42.8, 180.0], [42.9, 180.0], [43.0, 180.0], [43.1, 180.0], [43.2, 180.0], [43.3, 180.0], [43.4, 180.0], [43.5, 180.0], [43.6, 180.0], [43.7, 180.0], [43.8, 180.0], [43.9, 180.0], [44.0, 180.0], [44.1, 180.0], [44.2, 180.0], [44.3, 180.0], [44.4, 180.0], [44.5, 180.0], [44.6, 180.0], [44.7, 180.0], [44.8, 180.0], [44.9, 180.0], [45.0, 181.0], [45.1, 181.0], [45.2, 181.0], [45.3, 181.0], [45.4, 181.0], [45.5, 181.0], [45.6, 181.0], [45.7, 181.0], [45.8, 181.0], [45.9, 181.0], [46.0, 181.0], [46.1, 181.0], [46.2, 181.0], [46.3, 181.0], [46.4, 181.0], [46.5, 181.0], [46.6, 181.0], [46.7, 181.0], [46.8, 181.0], [46.9, 181.0], [47.0, 181.0], [47.1, 181.0], [47.2, 181.0], [47.3, 181.0], [47.4, 181.0], [47.5, 181.0], [47.6, 181.0], [47.7, 181.0], [47.8, 181.0], [47.9, 181.0], [48.0, 181.0], [48.1, 181.0], [48.2, 181.0], [48.3, 181.0], [48.4, 181.0], [48.5, 181.0], [48.6, 181.0], [48.7, 181.0], [48.8, 181.0], [48.9, 181.0], [49.0, 181.0], [49.1, 181.0], [49.2, 181.0], [49.3, 181.0], [49.4, 181.0], [49.5, 182.0], [49.6, 182.0], [49.7, 182.0], [49.8, 182.0], [49.9, 182.0], [50.0, 182.0], [50.1, 182.0], [50.2, 182.0], [50.3, 182.0], [50.4, 182.0], [50.5, 182.0], [50.6, 182.0], [50.7, 182.0], [50.8, 182.0], [50.9, 182.0], [51.0, 182.0], [51.1, 182.0], [51.2, 182.0], [51.3, 182.0], [51.4, 182.0], [51.5, 182.0], [51.6, 182.0], [51.7, 182.0], [51.8, 182.0], [51.9, 182.0], [52.0, 182.0], [52.1, 182.0], [52.2, 182.0], [52.3, 182.0], [52.4, 182.0], [52.5, 182.0], [52.6, 182.0], [52.7, 182.0], [52.8, 182.0], [52.9, 182.0], [53.0, 182.0], [53.1, 182.0], [53.2, 182.0], [53.3, 182.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 183.0], [53.8, 183.0], [53.9, 183.0], [54.0, 183.0], [54.1, 183.0], [54.2, 183.0], [54.3, 183.0], [54.4, 183.0], [54.5, 183.0], [54.6, 183.0], [54.7, 183.0], [54.8, 183.0], [54.9, 183.0], [55.0, 183.0], [55.1, 183.0], [55.2, 183.0], [55.3, 183.0], [55.4, 183.0], [55.5, 183.0], [55.6, 183.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 183.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 183.0], [56.5, 183.0], [56.6, 183.0], [56.7, 183.0], [56.8, 183.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 184.0], [57.3, 184.0], [57.4, 184.0], [57.5, 184.0], [57.6, 184.0], [57.7, 184.0], [57.8, 184.0], [57.9, 184.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 184.0], [58.7, 184.0], [58.8, 184.0], [58.9, 184.0], [59.0, 184.0], [59.1, 184.0], [59.2, 184.0], [59.3, 184.0], [59.4, 184.0], [59.5, 184.0], [59.6, 184.0], [59.7, 184.0], [59.8, 184.0], [59.9, 184.0], [60.0, 184.0], [60.1, 184.0], [60.2, 184.0], [60.3, 184.0], [60.4, 184.0], [60.5, 185.0], [60.6, 185.0], [60.7, 185.0], [60.8, 185.0], [60.9, 185.0], [61.0, 185.0], [61.1, 185.0], [61.2, 185.0], [61.3, 185.0], [61.4, 185.0], [61.5, 185.0], [61.6, 185.0], [61.7, 185.0], [61.8, 185.0], [61.9, 185.0], [62.0, 185.0], [62.1, 185.0], [62.2, 185.0], [62.3, 185.0], [62.4, 185.0], [62.5, 185.0], [62.6, 185.0], [62.7, 185.0], [62.8, 185.0], [62.9, 185.0], [63.0, 185.0], [63.1, 185.0], [63.2, 185.0], [63.3, 185.0], [63.4, 185.0], [63.5, 186.0], [63.6, 186.0], [63.7, 186.0], [63.8, 186.0], [63.9, 186.0], [64.0, 186.0], [64.1, 186.0], [64.2, 186.0], [64.3, 186.0], [64.4, 186.0], [64.5, 186.0], [64.6, 186.0], [64.7, 186.0], [64.8, 186.0], [64.9, 186.0], [65.0, 186.0], [65.1, 186.0], [65.2, 186.0], [65.3, 186.0], [65.4, 186.0], [65.5, 186.0], [65.6, 186.0], [65.7, 186.0], [65.8, 186.0], [65.9, 186.0], [66.0, 186.0], [66.1, 186.0], [66.2, 187.0], [66.3, 187.0], [66.4, 187.0], [66.5, 187.0], [66.6, 187.0], [66.7, 187.0], [66.8, 187.0], [66.9, 187.0], [67.0, 187.0], [67.1, 187.0], [67.2, 187.0], [67.3, 187.0], [67.4, 187.0], [67.5, 187.0], [67.6, 187.0], [67.7, 187.0], [67.8, 187.0], [67.9, 187.0], [68.0, 187.0], [68.1, 187.0], [68.2, 187.0], [68.3, 187.0], [68.4, 187.0], [68.5, 187.0], [68.6, 187.0], [68.7, 187.0], [68.8, 188.0], [68.9, 188.0], [69.0, 188.0], [69.1, 188.0], [69.2, 188.0], [69.3, 188.0], [69.4, 188.0], [69.5, 188.0], [69.6, 188.0], [69.7, 188.0], [69.8, 188.0], [69.9, 188.0], [70.0, 188.0], [70.1, 188.0], [70.2, 188.0], [70.3, 188.0], [70.4, 188.0], [70.5, 188.0], [70.6, 188.0], [70.7, 188.0], [70.8, 188.0], [70.9, 188.0], [71.0, 188.0], [71.1, 188.0], [71.2, 188.0], [71.3, 188.0], [71.4, 188.0], [71.5, 188.0], [71.6, 188.0], [71.7, 188.0], [71.8, 188.0], [71.9, 189.0], [72.0, 189.0], [72.1, 189.0], [72.2, 189.0], [72.3, 189.0], [72.4, 189.0], [72.5, 189.0], [72.6, 189.0], [72.7, 189.0], [72.8, 189.0], [72.9, 189.0], [73.0, 189.0], [73.1, 189.0], [73.2, 189.0], [73.3, 189.0], [73.4, 189.0], [73.5, 189.0], [73.6, 189.0], [73.7, 189.0], [73.8, 189.0], [73.9, 189.0], [74.0, 189.0], [74.1, 189.0], [74.2, 189.0], [74.3, 189.0], [74.4, 189.0], [74.5, 190.0], [74.6, 190.0], [74.7, 190.0], [74.8, 190.0], [74.9, 190.0], [75.0, 190.0], [75.1, 190.0], [75.2, 190.0], [75.3, 190.0], [75.4, 190.0], [75.5, 190.0], [75.6, 190.0], [75.7, 190.0], [75.8, 190.0], [75.9, 190.0], [76.0, 190.0], [76.1, 190.0], [76.2, 190.0], [76.3, 190.0], [76.4, 190.0], [76.5, 190.0], [76.6, 190.0], [76.7, 190.0], [76.8, 190.0], [76.9, 190.0], [77.0, 190.0], [77.1, 190.0], [77.2, 191.0], [77.3, 191.0], [77.4, 191.0], [77.5, 191.0], [77.6, 191.0], [77.7, 191.0], [77.8, 191.0], [77.9, 191.0], [78.0, 191.0], [78.1, 191.0], [78.2, 191.0], [78.3, 191.0], [78.4, 191.0], [78.5, 191.0], [78.6, 191.0], [78.7, 191.0], [78.8, 191.0], [78.9, 191.0], [79.0, 191.0], [79.1, 191.0], [79.2, 191.0], [79.3, 192.0], [79.4, 192.0], [79.5, 192.0], [79.6, 192.0], [79.7, 192.0], [79.8, 192.0], [79.9, 192.0], [80.0, 192.0], [80.1, 192.0], [80.2, 192.0], [80.3, 192.0], [80.4, 192.0], [80.5, 192.0], [80.6, 192.0], [80.7, 192.0], [80.8, 192.0], [80.9, 192.0], [81.0, 192.0], [81.1, 192.0], [81.2, 192.0], [81.3, 192.0], [81.4, 192.0], [81.5, 193.0], [81.6, 193.0], [81.7, 193.0], [81.8, 193.0], [81.9, 193.0], [82.0, 193.0], [82.1, 193.0], [82.2, 193.0], [82.3, 193.0], [82.4, 193.0], [82.5, 193.0], [82.6, 193.0], [82.7, 193.0], [82.8, 193.0], [82.9, 193.0], [83.0, 193.0], [83.1, 193.0], [83.2, 193.0], [83.3, 193.0], [83.4, 193.0], [83.5, 193.0], [83.6, 194.0], [83.7, 194.0], [83.8, 194.0], [83.9, 194.0], [84.0, 194.0], [84.1, 194.0], [84.2, 194.0], [84.3, 194.0], [84.4, 194.0], [84.5, 194.0], [84.6, 194.0], [84.7, 194.0], [84.8, 194.0], [84.9, 194.0], [85.0, 194.0], [85.1, 195.0], [85.2, 195.0], [85.3, 195.0], [85.4, 195.0], [85.5, 195.0], [85.6, 195.0], [85.7, 195.0], [85.8, 195.0], [85.9, 195.0], [86.0, 195.0], [86.1, 195.0], [86.2, 195.0], [86.3, 195.0], [86.4, 195.0], [86.5, 196.0], [86.6, 196.0], [86.7, 196.0], [86.8, 196.0], [86.9, 196.0], [87.0, 196.0], [87.1, 196.0], [87.2, 196.0], [87.3, 196.0], [87.4, 196.0], [87.5, 197.0], [87.6, 197.0], [87.7, 197.0], [87.8, 197.0], [87.9, 197.0], [88.0, 197.0], [88.1, 197.0], [88.2, 197.0], [88.3, 198.0], [88.4, 198.0], [88.5, 198.0], [88.6, 198.0], [88.7, 198.0], [88.8, 199.0], [88.9, 199.0], [89.0, 199.0], [89.1, 199.0], [89.2, 199.0], [89.3, 199.0], [89.4, 199.0], [89.5, 200.0], [89.6, 200.0], [89.7, 200.0], [89.8, 200.0], [89.9, 201.0], [90.0, 201.0], [90.1, 201.0], [90.2, 202.0], [90.3, 202.0], [90.4, 202.0], [90.5, 203.0], [90.6, 203.0], [90.7, 203.0], [90.8, 203.0], [90.9, 204.0], [91.0, 204.0], [91.1, 204.0], [91.2, 205.0], [91.3, 205.0], [91.4, 206.0], [91.5, 206.0], [91.6, 206.0], [91.7, 207.0], [91.8, 207.0], [91.9, 207.0], [92.0, 208.0], [92.1, 208.0], [92.2, 209.0], [92.3, 209.0], [92.4, 210.0], [92.5, 210.0], [92.6, 211.0], [92.7, 213.0], [92.8, 215.0], [92.9, 215.0], [93.0, 217.0], [93.1, 218.0], [93.2, 220.0], [93.3, 221.0], [93.4, 222.0], [93.5, 226.0], [93.6, 233.0], [93.7, 236.0], [93.8, 238.0], [93.9, 243.0], [94.0, 247.0], [94.1, 249.0], [94.2, 250.0], [94.3, 251.0], [94.4, 253.0], [94.5, 257.0], [94.6, 261.0], [94.7, 265.0], [94.8, 268.0], [94.9, 272.0], [95.0, 276.0], [95.1, 277.0], [95.2, 280.0], [95.3, 285.0], [95.4, 286.0], [95.5, 291.0], [95.6, 292.0], [95.7, 296.0], [95.8, 305.0], [95.9, 315.0], [96.0, 322.0], [96.1, 337.0], [96.2, 342.0], [96.3, 357.0], [96.4, 364.0], [96.5, 382.0], [96.6, 389.0], [96.7, 397.0], [96.8, 402.0], [96.9, 410.0], [97.0, 432.0], [97.1, 435.0], [97.2, 442.0], [97.3, 450.0], [97.4, 460.0], [97.5, 467.0], [97.6, 475.0], [97.7, 479.0], [97.8, 484.0], [97.9, 490.0], [98.0, 498.0], [98.1, 504.0], [98.2, 507.0], [98.3, 511.0], [98.4, 514.0], [98.5, 524.0], [98.6, 541.0], [98.7, 556.0], [98.8, 561.0], [98.9, 568.0], [99.0, 576.0], [99.1, 653.0], [99.2, 872.0], [99.3, 1004.0], [99.4, 1187.0], [99.5, 1194.0], [99.6, 1585.0], [99.7, 1839.0], [99.8, 2272.0], [99.9, 2835.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 4472.0, "series": [{"data": [[600.0, 2.0], [700.0, 2.0], [800.0, 2.0], [900.0, 4.0], [1000.0, 1.0], [1100.0, 11.0], [1200.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 2.0], [100.0, 4472.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2600.0, 3.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 316.0], [300.0, 51.0], [400.0, 62.0], [500.0, 54.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4901.0, "series": [{"data": [[0.0, 4901.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 79.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0961857379767785, "minX": 1.72865514E12, "maxY": 3.7052341597796143, "series": [{"data": [[1.72865526E12, 2.2129783693843605], [1.72865556E12, 2.0961857379767785], [1.72865538E12, 2.1005025125628145], [1.7286552E12, 2.589999999999998], [1.7286555E12, 2.1710963455149512], [1.72865532E12, 2.1747088186356094], [1.72865514E12, 3.7052341597796143], [1.72865562E12, 2.1103448275862053], [1.72865544E12, 2.153846153846152]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865562E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 183.75802106294387, "minX": 1.0, "maxY": 2877.0, "series": [{"data": [[33.0, 1514.6666666666667], [2.0, 183.75802106294387], [3.0, 242.22576177285325], [4.0, 295.99999999999994], [5.0, 370.1052631578948], [6.0, 468.0], [7.0, 1044.0], [8.0, 437.0], [9.0, 426.0], [10.0, 1660.0], [11.0, 1692.0], [13.0, 1983.0], [14.0, 2273.0], [15.0, 1839.0], [16.0, 2866.0], [1.0, 269.1666666666667], [17.0, 2094.0], [19.0, 2832.0], [20.0, 965.0], [21.0, 872.0], [22.0, 913.0], [23.0, 805.0], [25.0, 2630.0], [26.0, 2634.0], [28.0, 2135.5], [29.0, 2676.0], [30.0, 2877.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.3133999999999975, 205.90020000000018]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 33.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 726.0, "minX": 1.72865514E12, "maxY": 678706.7166666667, "series": [{"data": [[1.72865526E12, 676450.75], [1.72865556E12, 678706.7166666667], [1.72865538E12, 671952.9666666667], [1.7286552E12, 675311.8833333333], [1.7286555E12, 677581.1333333333], [1.72865532E12, 676453.95], [1.72865514E12, 408560.68333333335], [1.72865562E12, 489614.36666666664], [1.72865544E12, 673078.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72865526E12, 1202.0], [1.72865556E12, 1206.0], [1.72865538E12, 1194.0], [1.7286552E12, 1200.0], [1.7286555E12, 1204.0], [1.72865532E12, 1202.0], [1.72865514E12, 726.0], [1.72865562E12, 870.0], [1.72865544E12, 1196.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865562E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 186.05140961857367, "minX": 1.72865514E12, "maxY": 325.9476584022038, "series": [{"data": [[1.72865526E12, 197.68053244592366], [1.72865556E12, 186.05140961857367], [1.72865538E12, 188.85762144053587], [1.7286552E12, 228.07666666666668], [1.7286555E12, 194.09302325581365], [1.72865532E12, 191.34608985024963], [1.72865514E12, 325.9476584022038], [1.72865562E12, 189.45517241379312], [1.72865544E12, 194.54347826086965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865562E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 141.76782752902162, "minX": 1.72865514E12, "maxY": 271.89256198347164, "series": [{"data": [[1.72865526E12, 151.27953410981712], [1.72865556E12, 141.76782752902162], [1.72865538E12, 144.66499162479064], [1.7286552E12, 173.21833333333348], [1.7286555E12, 149.05980066445176], [1.72865532E12, 146.81031613976708], [1.72865514E12, 271.89256198347164], [1.72865562E12, 145.63678160919537], [1.72865544E12, 150.04682274247511]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865562E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 93.33167495854063, "minX": 1.72865514E12, "maxY": 210.97796143250682, "series": [{"data": [[1.72865526E12, 98.94009983361067], [1.72865556E12, 93.33167495854063], [1.72865538E12, 95.62646566164155], [1.7286552E12, 113.12166666666666], [1.7286555E12, 99.81229235880396], [1.72865532E12, 95.37770382695508], [1.72865514E12, 210.97796143250682], [1.72865562E12, 95.17241379310344], [1.72865544E12, 99.23076923076931]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865562E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 156.0, "minX": 1.72865514E12, "maxY": 3063.0, "series": [{"data": [[1.72865526E12, 1178.0], [1.72865556E12, 789.0], [1.72865538E12, 1194.0], [1.7286552E12, 1450.0], [1.7286555E12, 1197.0], [1.72865532E12, 1189.0], [1.72865514E12, 3063.0], [1.72865562E12, 524.0], [1.72865544E12, 1187.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72865526E12, 214.20000000000027], [1.72865556E12, 194.0], [1.72865538E12, 194.0], [1.7286552E12, 404.79999999999995], [1.7286555E12, 197.70000000000005], [1.72865532E12, 199.0], [1.72865514E12, 433.20000000000005], [1.72865562E12, 196.0], [1.72865544E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72865526E12, 480.62000000000035], [1.72865556E12, 260.52000000000044], [1.72865538E12, 478.2399999999998], [1.7286552E12, 587.9000000000001], [1.7286555E12, 508.97], [1.72865532E12, 469.98], [1.72865514E12, 2869.96], [1.72865562E12, 476.5999999999998], [1.72865544E12, 513.0999999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72865526E12, 330.9999999999998], [1.72865556E12, 200.0], [1.72865538E12, 199.0], [1.7286552E12, 529.4999999999993], [1.7286555E12, 232.55000000000007], [1.72865532E12, 215.39999999999986], [1.72865514E12, 1685.6000000000004], [1.72865562E12, 224.59999999999985], [1.72865544E12, 207.14999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72865526E12, 161.0], [1.72865556E12, 162.0], [1.72865538E12, 163.0], [1.7286552E12, 156.0], [1.7286555E12, 165.0], [1.72865532E12, 163.0], [1.72865514E12, 159.0], [1.72865562E12, 161.0], [1.72865544E12, 159.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72865526E12, 181.0], [1.72865556E12, 181.0], [1.72865538E12, 181.0], [1.7286552E12, 181.0], [1.7286555E12, 182.0], [1.72865532E12, 183.0], [1.72865514E12, 183.0], [1.72865562E12, 181.0], [1.72865544E12, 182.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865562E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 176.5, "minX": 4.0, "maxY": 1692.0, "series": [{"data": [[8.0, 184.0], [4.0, 176.5], [35.0, 1692.0], [9.0, 181.0], [10.0, 182.0], [11.0, 182.0], [12.0, 181.0], [13.0, 185.0], [7.0, 182.5], [14.0, 180.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 133.0, "minX": 4.0, "maxY": 1484.0, "series": [{"data": [[8.0, 138.0], [4.0, 133.0], [35.0, 1484.0], [9.0, 138.0], [10.0, 138.0], [11.0, 138.0], [12.0, 137.0], [13.0, 140.0], [7.0, 137.0], [14.0, 135.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.083333333333333, "minX": 1.72865514E12, "maxY": 10.05, "series": [{"data": [[1.72865526E12, 10.0], [1.72865556E12, 10.05], [1.72865538E12, 9.95], [1.7286552E12, 10.0], [1.7286555E12, 10.033333333333333], [1.72865532E12, 10.033333333333333], [1.72865514E12, 6.083333333333333], [1.72865562E12, 7.216666666666667], [1.72865544E12, 9.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865562E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.05, "minX": 1.72865514E12, "maxY": 10.05, "series": [{"data": [[1.72865526E12, 10.016666666666667], [1.72865556E12, 10.05], [1.72865538E12, 9.95], [1.7286552E12, 10.0], [1.7286555E12, 10.033333333333333], [1.72865532E12, 10.016666666666667], [1.72865514E12, 6.05], [1.72865562E12, 7.25], [1.72865544E12, 9.966666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865562E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.05, "minX": 1.72865514E12, "maxY": 10.05, "series": [{"data": [[1.72865526E12, 10.016666666666667], [1.72865556E12, 10.05], [1.72865538E12, 9.95], [1.7286552E12, 10.0], [1.7286555E12, 10.033333333333333], [1.72865532E12, 10.016666666666667], [1.72865514E12, 6.05], [1.72865562E12, 7.25], [1.72865544E12, 9.966666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865562E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.05, "minX": 1.72865514E12, "maxY": 10.05, "series": [{"data": [[1.72865526E12, 10.016666666666667], [1.72865556E12, 10.05], [1.72865538E12, 9.95], [1.7286552E12, 10.0], [1.7286555E12, 10.033333333333333], [1.72865532E12, 10.016666666666667], [1.72865514E12, 6.05], [1.72865562E12, 7.25], [1.72865544E12, 9.966666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865562E12, "title": "Total Transactions Per Second"}},
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

