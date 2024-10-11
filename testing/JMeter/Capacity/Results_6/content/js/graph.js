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
        data: {"result": {"minY": 159.0, "minX": 0.0, "maxY": 2033.0, "series": [{"data": [[0.0, 159.0], [0.1, 160.0], [0.2, 161.0], [0.3, 162.0], [0.4, 163.0], [0.5, 163.0], [0.6, 164.0], [0.7, 164.0], [0.8, 164.0], [0.9, 164.0], [1.0, 164.0], [1.1, 165.0], [1.2, 165.0], [1.3, 165.0], [1.4, 165.0], [1.5, 165.0], [1.6, 166.0], [1.7, 166.0], [1.8, 166.0], [1.9, 166.0], [2.0, 166.0], [2.1, 166.0], [2.2, 167.0], [2.3, 167.0], [2.4, 167.0], [2.5, 167.0], [2.6, 167.0], [2.7, 167.0], [2.8, 167.0], [2.9, 167.0], [3.0, 167.0], [3.1, 168.0], [3.2, 168.0], [3.3, 168.0], [3.4, 168.0], [3.5, 168.0], [3.6, 168.0], [3.7, 168.0], [3.8, 168.0], [3.9, 168.0], [4.0, 169.0], [4.1, 169.0], [4.2, 169.0], [4.3, 169.0], [4.4, 169.0], [4.5, 169.0], [4.6, 169.0], [4.7, 169.0], [4.8, 169.0], [4.9, 169.0], [5.0, 169.0], [5.1, 169.0], [5.2, 169.0], [5.3, 169.0], [5.4, 169.0], [5.5, 169.0], [5.6, 169.0], [5.7, 170.0], [5.8, 170.0], [5.9, 170.0], [6.0, 170.0], [6.1, 170.0], [6.2, 170.0], [6.3, 170.0], [6.4, 170.0], [6.5, 170.0], [6.6, 170.0], [6.7, 170.0], [6.8, 170.0], [6.9, 170.0], [7.0, 170.0], [7.1, 171.0], [7.2, 171.0], [7.3, 171.0], [7.4, 171.0], [7.5, 171.0], [7.6, 171.0], [7.7, 171.0], [7.8, 171.0], [7.9, 171.0], [8.0, 171.0], [8.1, 171.0], [8.2, 171.0], [8.3, 171.0], [8.4, 171.0], [8.5, 171.0], [8.6, 171.0], [8.7, 171.0], [8.8, 171.0], [8.9, 171.0], [9.0, 171.0], [9.1, 171.0], [9.2, 171.0], [9.3, 172.0], [9.4, 172.0], [9.5, 172.0], [9.6, 172.0], [9.7, 172.0], [9.8, 172.0], [9.9, 172.0], [10.0, 172.0], [10.1, 172.0], [10.2, 172.0], [10.3, 172.0], [10.4, 172.0], [10.5, 172.0], [10.6, 172.0], [10.7, 172.0], [10.8, 172.0], [10.9, 172.0], [11.0, 172.0], [11.1, 172.0], [11.2, 172.0], [11.3, 172.0], [11.4, 172.0], [11.5, 172.0], [11.6, 172.0], [11.7, 172.0], [11.8, 172.0], [11.9, 173.0], [12.0, 173.0], [12.1, 173.0], [12.2, 173.0], [12.3, 173.0], [12.4, 173.0], [12.5, 173.0], [12.6, 173.0], [12.7, 173.0], [12.8, 173.0], [12.9, 173.0], [13.0, 173.0], [13.1, 173.0], [13.2, 173.0], [13.3, 173.0], [13.4, 173.0], [13.5, 173.0], [13.6, 173.0], [13.7, 173.0], [13.8, 173.0], [13.9, 173.0], [14.0, 173.0], [14.1, 173.0], [14.2, 173.0], [14.3, 173.0], [14.4, 173.0], [14.5, 173.0], [14.6, 173.0], [14.7, 174.0], [14.8, 174.0], [14.9, 174.0], [15.0, 174.0], [15.1, 174.0], [15.2, 174.0], [15.3, 174.0], [15.4, 174.0], [15.5, 174.0], [15.6, 174.0], [15.7, 174.0], [15.8, 174.0], [15.9, 174.0], [16.0, 174.0], [16.1, 174.0], [16.2, 174.0], [16.3, 174.0], [16.4, 174.0], [16.5, 174.0], [16.6, 174.0], [16.7, 174.0], [16.8, 174.0], [16.9, 174.0], [17.0, 174.0], [17.1, 174.0], [17.2, 174.0], [17.3, 174.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 174.0], [17.8, 175.0], [17.9, 175.0], [18.0, 175.0], [18.1, 175.0], [18.2, 175.0], [18.3, 175.0], [18.4, 175.0], [18.5, 175.0], [18.6, 175.0], [18.7, 175.0], [18.8, 175.0], [18.9, 175.0], [19.0, 175.0], [19.1, 175.0], [19.2, 175.0], [19.3, 175.0], [19.4, 175.0], [19.5, 175.0], [19.6, 175.0], [19.7, 175.0], [19.8, 175.0], [19.9, 175.0], [20.0, 175.0], [20.1, 175.0], [20.2, 175.0], [20.3, 175.0], [20.4, 175.0], [20.5, 175.0], [20.6, 175.0], [20.7, 175.0], [20.8, 175.0], [20.9, 175.0], [21.0, 175.0], [21.1, 175.0], [21.2, 175.0], [21.3, 175.0], [21.4, 175.0], [21.5, 175.0], [21.6, 175.0], [21.7, 175.0], [21.8, 175.0], [21.9, 176.0], [22.0, 176.0], [22.1, 176.0], [22.2, 176.0], [22.3, 176.0], [22.4, 176.0], [22.5, 176.0], [22.6, 176.0], [22.7, 176.0], [22.8, 176.0], [22.9, 176.0], [23.0, 176.0], [23.1, 176.0], [23.2, 176.0], [23.3, 176.0], [23.4, 176.0], [23.5, 176.0], [23.6, 176.0], [23.7, 176.0], [23.8, 176.0], [23.9, 176.0], [24.0, 176.0], [24.1, 176.0], [24.2, 176.0], [24.3, 176.0], [24.4, 176.0], [24.5, 176.0], [24.6, 176.0], [24.7, 176.0], [24.8, 176.0], [24.9, 176.0], [25.0, 176.0], [25.1, 176.0], [25.2, 176.0], [25.3, 176.0], [25.4, 176.0], [25.5, 176.0], [25.6, 176.0], [25.7, 176.0], [25.8, 176.0], [25.9, 177.0], [26.0, 177.0], [26.1, 177.0], [26.2, 177.0], [26.3, 177.0], [26.4, 177.0], [26.5, 177.0], [26.6, 177.0], [26.7, 177.0], [26.8, 177.0], [26.9, 177.0], [27.0, 177.0], [27.1, 177.0], [27.2, 177.0], [27.3, 177.0], [27.4, 177.0], [27.5, 177.0], [27.6, 177.0], [27.7, 177.0], [27.8, 177.0], [27.9, 177.0], [28.0, 177.0], [28.1, 177.0], [28.2, 177.0], [28.3, 177.0], [28.4, 177.0], [28.5, 177.0], [28.6, 177.0], [28.7, 177.0], [28.8, 177.0], [28.9, 177.0], [29.0, 177.0], [29.1, 177.0], [29.2, 177.0], [29.3, 177.0], [29.4, 177.0], [29.5, 177.0], [29.6, 177.0], [29.7, 177.0], [29.8, 177.0], [29.9, 177.0], [30.0, 177.0], [30.1, 177.0], [30.2, 178.0], [30.3, 178.0], [30.4, 178.0], [30.5, 178.0], [30.6, 178.0], [30.7, 178.0], [30.8, 178.0], [30.9, 178.0], [31.0, 178.0], [31.1, 178.0], [31.2, 178.0], [31.3, 178.0], [31.4, 178.0], [31.5, 178.0], [31.6, 178.0], [31.7, 178.0], [31.8, 178.0], [31.9, 178.0], [32.0, 178.0], [32.1, 178.0], [32.2, 178.0], [32.3, 178.0], [32.4, 178.0], [32.5, 178.0], [32.6, 178.0], [32.7, 178.0], [32.8, 178.0], [32.9, 178.0], [33.0, 178.0], [33.1, 178.0], [33.2, 178.0], [33.3, 178.0], [33.4, 178.0], [33.5, 178.0], [33.6, 178.0], [33.7, 178.0], [33.8, 178.0], [33.9, 178.0], [34.0, 178.0], [34.1, 178.0], [34.2, 178.0], [34.3, 178.0], [34.4, 178.0], [34.5, 179.0], [34.6, 179.0], [34.7, 179.0], [34.8, 179.0], [34.9, 179.0], [35.0, 179.0], [35.1, 179.0], [35.2, 179.0], [35.3, 179.0], [35.4, 179.0], [35.5, 179.0], [35.6, 179.0], [35.7, 179.0], [35.8, 179.0], [35.9, 179.0], [36.0, 179.0], [36.1, 179.0], [36.2, 179.0], [36.3, 179.0], [36.4, 179.0], [36.5, 179.0], [36.6, 179.0], [36.7, 179.0], [36.8, 179.0], [36.9, 179.0], [37.0, 179.0], [37.1, 179.0], [37.2, 179.0], [37.3, 179.0], [37.4, 179.0], [37.5, 179.0], [37.6, 179.0], [37.7, 179.0], [37.8, 179.0], [37.9, 179.0], [38.0, 179.0], [38.1, 179.0], [38.2, 179.0], [38.3, 179.0], [38.4, 179.0], [38.5, 179.0], [38.6, 179.0], [38.7, 179.0], [38.8, 179.0], [38.9, 179.0], [39.0, 179.0], [39.1, 179.0], [39.2, 179.0], [39.3, 179.0], [39.4, 179.0], [39.5, 180.0], [39.6, 180.0], [39.7, 180.0], [39.8, 180.0], [39.9, 180.0], [40.0, 180.0], [40.1, 180.0], [40.2, 180.0], [40.3, 180.0], [40.4, 180.0], [40.5, 180.0], [40.6, 180.0], [40.7, 180.0], [40.8, 180.0], [40.9, 180.0], [41.0, 180.0], [41.1, 180.0], [41.2, 180.0], [41.3, 180.0], [41.4, 180.0], [41.5, 180.0], [41.6, 180.0], [41.7, 180.0], [41.8, 180.0], [41.9, 180.0], [42.0, 180.0], [42.1, 180.0], [42.2, 180.0], [42.3, 180.0], [42.4, 180.0], [42.5, 180.0], [42.6, 180.0], [42.7, 180.0], [42.8, 180.0], [42.9, 180.0], [43.0, 180.0], [43.1, 180.0], [43.2, 180.0], [43.3, 180.0], [43.4, 180.0], [43.5, 180.0], [43.6, 180.0], [43.7, 180.0], [43.8, 180.0], [43.9, 180.0], [44.0, 180.0], [44.1, 180.0], [44.2, 180.0], [44.3, 180.0], [44.4, 180.0], [44.5, 181.0], [44.6, 181.0], [44.7, 181.0], [44.8, 181.0], [44.9, 181.0], [45.0, 181.0], [45.1, 181.0], [45.2, 181.0], [45.3, 181.0], [45.4, 181.0], [45.5, 181.0], [45.6, 181.0], [45.7, 181.0], [45.8, 181.0], [45.9, 181.0], [46.0, 181.0], [46.1, 181.0], [46.2, 181.0], [46.3, 181.0], [46.4, 181.0], [46.5, 181.0], [46.6, 181.0], [46.7, 181.0], [46.8, 181.0], [46.9, 181.0], [47.0, 181.0], [47.1, 181.0], [47.2, 181.0], [47.3, 181.0], [47.4, 181.0], [47.5, 181.0], [47.6, 181.0], [47.7, 181.0], [47.8, 181.0], [47.9, 181.0], [48.0, 181.0], [48.1, 181.0], [48.2, 181.0], [48.3, 181.0], [48.4, 181.0], [48.5, 181.0], [48.6, 181.0], [48.7, 181.0], [48.8, 181.0], [48.9, 181.0], [49.0, 181.0], [49.1, 181.0], [49.2, 181.0], [49.3, 181.0], [49.4, 181.0], [49.5, 181.0], [49.6, 181.0], [49.7, 181.0], [49.8, 181.0], [49.9, 181.0], [50.0, 182.0], [50.1, 182.0], [50.2, 182.0], [50.3, 182.0], [50.4, 182.0], [50.5, 182.0], [50.6, 182.0], [50.7, 182.0], [50.8, 182.0], [50.9, 182.0], [51.0, 182.0], [51.1, 182.0], [51.2, 182.0], [51.3, 182.0], [51.4, 182.0], [51.5, 182.0], [51.6, 182.0], [51.7, 182.0], [51.8, 182.0], [51.9, 182.0], [52.0, 182.0], [52.1, 182.0], [52.2, 182.0], [52.3, 182.0], [52.4, 182.0], [52.5, 182.0], [52.6, 182.0], [52.7, 182.0], [52.8, 182.0], [52.9, 182.0], [53.0, 182.0], [53.1, 182.0], [53.2, 182.0], [53.3, 182.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 182.0], [53.8, 182.0], [53.9, 182.0], [54.0, 182.0], [54.1, 182.0], [54.2, 182.0], [54.3, 182.0], [54.4, 182.0], [54.5, 183.0], [54.6, 183.0], [54.7, 183.0], [54.8, 183.0], [54.9, 183.0], [55.0, 183.0], [55.1, 183.0], [55.2, 183.0], [55.3, 183.0], [55.4, 183.0], [55.5, 183.0], [55.6, 183.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 183.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 183.0], [56.5, 183.0], [56.6, 183.0], [56.7, 183.0], [56.8, 183.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 183.0], [57.3, 183.0], [57.4, 183.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 183.0], [57.9, 183.0], [58.0, 183.0], [58.1, 183.0], [58.2, 183.0], [58.3, 183.0], [58.4, 183.0], [58.5, 183.0], [58.6, 183.0], [58.7, 183.0], [58.8, 183.0], [58.9, 183.0], [59.0, 184.0], [59.1, 184.0], [59.2, 184.0], [59.3, 184.0], [59.4, 184.0], [59.5, 184.0], [59.6, 184.0], [59.7, 184.0], [59.8, 184.0], [59.9, 184.0], [60.0, 184.0], [60.1, 184.0], [60.2, 184.0], [60.3, 184.0], [60.4, 184.0], [60.5, 184.0], [60.6, 184.0], [60.7, 184.0], [60.8, 184.0], [60.9, 184.0], [61.0, 184.0], [61.1, 184.0], [61.2, 184.0], [61.3, 184.0], [61.4, 184.0], [61.5, 184.0], [61.6, 184.0], [61.7, 184.0], [61.8, 184.0], [61.9, 184.0], [62.0, 184.0], [62.1, 184.0], [62.2, 184.0], [62.3, 184.0], [62.4, 184.0], [62.5, 184.0], [62.6, 184.0], [62.7, 184.0], [62.8, 184.0], [62.9, 184.0], [63.0, 184.0], [63.1, 185.0], [63.2, 185.0], [63.3, 185.0], [63.4, 185.0], [63.5, 185.0], [63.6, 185.0], [63.7, 185.0], [63.8, 185.0], [63.9, 185.0], [64.0, 185.0], [64.1, 185.0], [64.2, 185.0], [64.3, 185.0], [64.4, 185.0], [64.5, 185.0], [64.6, 185.0], [64.7, 185.0], [64.8, 185.0], [64.9, 185.0], [65.0, 185.0], [65.1, 185.0], [65.2, 185.0], [65.3, 185.0], [65.4, 185.0], [65.5, 185.0], [65.6, 185.0], [65.7, 185.0], [65.8, 185.0], [65.9, 185.0], [66.0, 185.0], [66.1, 185.0], [66.2, 185.0], [66.3, 185.0], [66.4, 185.0], [66.5, 185.0], [66.6, 185.0], [66.7, 185.0], [66.8, 185.0], [66.9, 185.0], [67.0, 185.0], [67.1, 185.0], [67.2, 186.0], [67.3, 186.0], [67.4, 186.0], [67.5, 186.0], [67.6, 186.0], [67.7, 186.0], [67.8, 186.0], [67.9, 186.0], [68.0, 186.0], [68.1, 186.0], [68.2, 186.0], [68.3, 186.0], [68.4, 186.0], [68.5, 186.0], [68.6, 186.0], [68.7, 186.0], [68.8, 186.0], [68.9, 186.0], [69.0, 186.0], [69.1, 186.0], [69.2, 186.0], [69.3, 186.0], [69.4, 186.0], [69.5, 186.0], [69.6, 186.0], [69.7, 186.0], [69.8, 186.0], [69.9, 186.0], [70.0, 186.0], [70.1, 186.0], [70.2, 186.0], [70.3, 186.0], [70.4, 186.0], [70.5, 186.0], [70.6, 186.0], [70.7, 187.0], [70.8, 187.0], [70.9, 187.0], [71.0, 187.0], [71.1, 187.0], [71.2, 187.0], [71.3, 187.0], [71.4, 187.0], [71.5, 187.0], [71.6, 187.0], [71.7, 187.0], [71.8, 187.0], [71.9, 187.0], [72.0, 187.0], [72.1, 187.0], [72.2, 187.0], [72.3, 187.0], [72.4, 187.0], [72.5, 187.0], [72.6, 187.0], [72.7, 187.0], [72.8, 187.0], [72.9, 187.0], [73.0, 187.0], [73.1, 187.0], [73.2, 187.0], [73.3, 187.0], [73.4, 187.0], [73.5, 187.0], [73.6, 187.0], [73.7, 187.0], [73.8, 187.0], [73.9, 188.0], [74.0, 188.0], [74.1, 188.0], [74.2, 188.0], [74.3, 188.0], [74.4, 188.0], [74.5, 188.0], [74.6, 188.0], [74.7, 188.0], [74.8, 188.0], [74.9, 188.0], [75.0, 188.0], [75.1, 188.0], [75.2, 188.0], [75.3, 188.0], [75.4, 188.0], [75.5, 188.0], [75.6, 188.0], [75.7, 188.0], [75.8, 188.0], [75.9, 188.0], [76.0, 188.0], [76.1, 188.0], [76.2, 188.0], [76.3, 188.0], [76.4, 188.0], [76.5, 188.0], [76.6, 188.0], [76.7, 188.0], [76.8, 188.0], [76.9, 188.0], [77.0, 188.0], [77.1, 189.0], [77.2, 189.0], [77.3, 189.0], [77.4, 189.0], [77.5, 189.0], [77.6, 189.0], [77.7, 189.0], [77.8, 189.0], [77.9, 189.0], [78.0, 189.0], [78.1, 189.0], [78.2, 189.0], [78.3, 189.0], [78.4, 189.0], [78.5, 189.0], [78.6, 189.0], [78.7, 189.0], [78.8, 189.0], [78.9, 189.0], [79.0, 189.0], [79.1, 189.0], [79.2, 189.0], [79.3, 189.0], [79.4, 189.0], [79.5, 189.0], [79.6, 189.0], [79.7, 189.0], [79.8, 190.0], [79.9, 190.0], [80.0, 190.0], [80.1, 190.0], [80.2, 190.0], [80.3, 190.0], [80.4, 190.0], [80.5, 190.0], [80.6, 190.0], [80.7, 190.0], [80.8, 190.0], [80.9, 190.0], [81.0, 190.0], [81.1, 190.0], [81.2, 190.0], [81.3, 191.0], [81.4, 191.0], [81.5, 191.0], [81.6, 191.0], [81.7, 191.0], [81.8, 191.0], [81.9, 191.0], [82.0, 191.0], [82.1, 191.0], [82.2, 191.0], [82.3, 191.0], [82.4, 191.0], [82.5, 191.0], [82.6, 191.0], [82.7, 191.0], [82.8, 191.0], [82.9, 191.0], [83.0, 191.0], [83.1, 191.0], [83.2, 191.0], [83.3, 192.0], [83.4, 192.0], [83.5, 192.0], [83.6, 192.0], [83.7, 192.0], [83.8, 192.0], [83.9, 192.0], [84.0, 192.0], [84.1, 192.0], [84.2, 192.0], [84.3, 192.0], [84.4, 192.0], [84.5, 192.0], [84.6, 192.0], [84.7, 193.0], [84.8, 193.0], [84.9, 193.0], [85.0, 193.0], [85.1, 193.0], [85.2, 193.0], [85.3, 193.0], [85.4, 193.0], [85.5, 193.0], [85.6, 193.0], [85.7, 193.0], [85.8, 194.0], [85.9, 194.0], [86.0, 194.0], [86.1, 194.0], [86.2, 194.0], [86.3, 194.0], [86.4, 194.0], [86.5, 194.0], [86.6, 194.0], [86.7, 194.0], [86.8, 194.0], [86.9, 194.0], [87.0, 194.0], [87.1, 194.0], [87.2, 194.0], [87.3, 195.0], [87.4, 195.0], [87.5, 195.0], [87.6, 195.0], [87.7, 195.0], [87.8, 195.0], [87.9, 196.0], [88.0, 196.0], [88.1, 196.0], [88.2, 196.0], [88.3, 196.0], [88.4, 196.0], [88.5, 196.0], [88.6, 196.0], [88.7, 196.0], [88.8, 197.0], [88.9, 197.0], [89.0, 197.0], [89.1, 197.0], [89.2, 197.0], [89.3, 197.0], [89.4, 197.0], [89.5, 197.0], [89.6, 198.0], [89.7, 198.0], [89.8, 198.0], [89.9, 198.0], [90.0, 198.0], [90.1, 198.0], [90.2, 198.0], [90.3, 198.0], [90.4, 198.0], [90.5, 198.0], [90.6, 199.0], [90.7, 199.0], [90.8, 199.0], [90.9, 199.0], [91.0, 199.0], [91.1, 199.0], [91.2, 200.0], [91.3, 200.0], [91.4, 200.0], [91.5, 200.0], [91.6, 200.0], [91.7, 200.0], [91.8, 201.0], [91.9, 201.0], [92.0, 201.0], [92.1, 201.0], [92.2, 202.0], [92.3, 202.0], [92.4, 202.0], [92.5, 202.0], [92.6, 202.0], [92.7, 203.0], [92.8, 203.0], [92.9, 204.0], [93.0, 204.0], [93.1, 204.0], [93.2, 204.0], [93.3, 205.0], [93.4, 205.0], [93.5, 205.0], [93.6, 206.0], [93.7, 206.0], [93.8, 207.0], [93.9, 207.0], [94.0, 207.0], [94.1, 208.0], [94.2, 208.0], [94.3, 209.0], [94.4, 209.0], [94.5, 210.0], [94.6, 210.0], [94.7, 211.0], [94.8, 211.0], [94.9, 212.0], [95.0, 213.0], [95.1, 213.0], [95.2, 214.0], [95.3, 215.0], [95.4, 216.0], [95.5, 219.0], [95.6, 220.0], [95.7, 223.0], [95.8, 228.0], [95.9, 233.0], [96.0, 234.0], [96.1, 241.0], [96.2, 243.0], [96.3, 251.0], [96.4, 263.0], [96.5, 285.0], [96.6, 293.0], [96.7, 296.0], [96.8, 306.0], [96.9, 307.0], [97.0, 311.0], [97.1, 314.0], [97.2, 316.0], [97.3, 317.0], [97.4, 321.0], [97.5, 329.0], [97.6, 332.0], [97.7, 343.0], [97.8, 368.0], [97.9, 438.0], [98.0, 440.0], [98.1, 455.0], [98.2, 472.0], [98.3, 482.0], [98.4, 489.0], [98.5, 497.0], [98.6, 499.0], [98.7, 505.0], [98.8, 510.0], [98.9, 516.0], [99.0, 524.0], [99.1, 543.0], [99.2, 786.0], [99.3, 988.0], [99.4, 1184.0], [99.5, 1190.0], [99.6, 1221.0], [99.7, 1283.0], [99.8, 1586.0], [99.9, 1997.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2733.0, "series": [{"data": [[600.0, 1.0], [700.0, 2.0], [200.0, 170.0], [800.0, 1.0], [900.0, 2.0], [1100.0, 6.0], [300.0, 32.0], [1200.0, 6.0], [1400.0, 1.0], [1500.0, 2.0], [400.0, 24.0], [100.0, 2733.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 2.0], [500.0, 15.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2959.0, "series": [{"data": [[0.0, 2959.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 34.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0263157894736823, "minX": 1.7286546E12, "maxY": 2.332524271844657, "series": [{"data": [[1.7286546E12, 2.332524271844657], [1.72865478E12, 2.0423940149625937], [1.72865472E12, 2.047500000000001], [1.7286549E12, 2.1075000000000004], [1.72865484E12, 2.0501253132832087], [1.72865502E12, 2.0263157894736823], [1.72865496E12, 2.0399999999999996], [1.72865466E12, 2.0376884422110555]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865502E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 183.28571428571428, "minX": 1.0, "maxY": 2033.0, "series": [{"data": [[8.0, 368.0], [2.0, 189.16123253314223], [9.0, 786.0], [10.0, 622.0], [11.0, 2033.0], [12.0, 1711.0], [3.0, 240.37748344370854], [14.0, 2018.0], [15.0, 1534.0], [16.0, 1828.0], [4.0, 441.64705882352945], [1.0, 183.28571428571428], [5.0, 1283.0], [6.0, 421.0], [7.0, 917.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.0906666666666673, 197.98199999999957]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 380.0, "minX": 1.7286546E12, "maxY": 463716.25, "series": [{"data": [[1.7286546E12, 463716.25], [1.72865478E12, 451343.3333333333], [1.72865472E12, 450216.7166666667], [1.7286549E12, 450219.2833333333], [1.72865484E12, 449093.35], [1.72865502E12, 213854.28333333333], [1.72865496E12, 450219.68333333335], [1.72865466E12, 447963.61666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7286546E12, 824.0], [1.72865478E12, 802.0], [1.72865472E12, 800.0], [1.7286549E12, 800.0], [1.72865484E12, 798.0], [1.72865502E12, 380.0], [1.72865496E12, 800.0], [1.72865466E12, 796.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865502E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 188.78250000000014, "minX": 1.7286546E12, "maxY": 237.1237864077667, "series": [{"data": [[1.7286546E12, 237.1237864077667], [1.72865478E12, 190.99002493765565], [1.72865472E12, 189.63999999999982], [1.7286549E12, 198.90749999999994], [1.72865484E12, 191.50877192982472], [1.72865502E12, 189.94210526315788], [1.72865496E12, 188.78250000000014], [1.72865466E12, 191.53517587939695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865502E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 144.21250000000018, "minX": 1.7286546E12, "maxY": 189.82281553398073, "series": [{"data": [[1.7286546E12, 189.82281553398073], [1.72865478E12, 146.6458852867831], [1.72865472E12, 145.46250000000003], [1.7286549E12, 154.34500000000006], [1.72865484E12, 146.81954887218055], [1.72865502E12, 146.03157894736842], [1.72865496E12, 144.21250000000018], [1.72865466E12, 147.0954773869347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865502E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 96.1002506265664, "minX": 1.7286546E12, "maxY": 137.6771844660196, "series": [{"data": [[1.7286546E12, 137.6771844660196], [1.72865478E12, 99.50124688279296], [1.72865472E12, 97.83999999999996], [1.7286549E12, 103.23499999999994], [1.72865484E12, 96.1002506265664], [1.72865502E12, 98.05789473684207], [1.72865496E12, 96.93750000000001], [1.72865466E12, 98.467336683417]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865502E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 159.0, "minX": 1.7286546E12, "maxY": 2033.0, "series": [{"data": [[1.7286546E12, 2033.0], [1.72865478E12, 1221.0], [1.72865472E12, 1211.0], [1.7286549E12, 1206.0], [1.72865484E12, 831.0], [1.72865502E12, 1190.0], [1.72865496E12, 1190.0], [1.72865466E12, 1177.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7286546E12, 207.0], [1.72865478E12, 195.8], [1.72865472E12, 195.90000000000003], [1.7286549E12, 199.0], [1.72865484E12, 197.0], [1.72865502E12, 192.9], [1.72865496E12, 196.90000000000003], [1.72865466E12, 196.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7286546E12, 1864.2600000000004], [1.72865478E12, 517.8600000000001], [1.72865472E12, 496.85000000000014], [1.7286549E12, 542.5400000000004], [1.72865484E12, 474.0], [1.72865502E12, 507.50000000000256], [1.72865496E12, 496.61000000000035], [1.72865466E12, 510.1199999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7286546E12, 386.5499999999982], [1.72865478E12, 209.69999999999993], [1.72865472E12, 213.95], [1.7286549E12, 307.0], [1.72865484E12, 220.0], [1.72865502E12, 201.45], [1.72865496E12, 208.89999999999998], [1.72865466E12, 201.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7286546E12, 165.0], [1.72865478E12, 160.0], [1.72865472E12, 160.0], [1.7286549E12, 163.0], [1.72865484E12, 161.0], [1.72865502E12, 164.0], [1.72865496E12, 159.0], [1.72865466E12, 159.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7286546E12, 186.0], [1.72865478E12, 180.0], [1.72865472E12, 180.0], [1.7286549E12, 181.0], [1.72865484E12, 182.0], [1.72865502E12, 182.0], [1.72865496E12, 181.0], [1.72865466E12, 183.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.0, "minX": 3.0, "maxY": 952.5, "series": [{"data": [[8.0, 184.0], [4.0, 185.5], [9.0, 185.5], [20.0, 952.5], [5.0, 181.5], [6.0, 181.0], [3.0, 185.5], [7.0, 181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 138.0, "minX": 3.0, "maxY": 808.0, "series": [{"data": [[8.0, 139.0], [4.0, 138.5], [9.0, 141.0], [20.0, 808.0], [5.0, 139.0], [6.0, 138.0], [3.0, 141.5], [7.0, 138.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.72865454E12, "maxY": 6.683333333333334, "series": [{"data": [[1.7286546E12, 6.683333333333334], [1.72865478E12, 6.666666666666667], [1.72865472E12, 6.666666666666667], [1.7286549E12, 6.666666666666667], [1.72865484E12, 6.65], [1.72865454E12, 0.21666666666666667], [1.72865502E12, 3.15], [1.72865496E12, 6.666666666666667], [1.72865466E12, 6.633333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865502E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.7286546E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7286546E12, 6.866666666666666], [1.72865478E12, 6.683333333333334], [1.72865472E12, 6.666666666666667], [1.7286549E12, 6.666666666666667], [1.72865484E12, 6.65], [1.72865502E12, 3.1666666666666665], [1.72865496E12, 6.666666666666667], [1.72865466E12, 6.633333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72865502E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.7286546E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7286546E12, 6.866666666666666], [1.72865478E12, 6.683333333333334], [1.72865472E12, 6.666666666666667], [1.7286549E12, 6.666666666666667], [1.72865484E12, 6.65], [1.72865502E12, 3.1666666666666665], [1.72865496E12, 6.666666666666667], [1.72865466E12, 6.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865502E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.7286546E12, "maxY": 6.866666666666666, "series": [{"data": [[1.7286546E12, 6.866666666666666], [1.72865478E12, 6.683333333333334], [1.72865472E12, 6.666666666666667], [1.7286549E12, 6.666666666666667], [1.72865484E12, 6.65], [1.72865502E12, 3.1666666666666665], [1.72865496E12, 6.666666666666667], [1.72865466E12, 6.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72865502E12, "title": "Total Transactions Per Second"}},
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

