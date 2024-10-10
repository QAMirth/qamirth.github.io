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
        data: {"result": {"minY": 158.0, "minX": 0.0, "maxY": 1259.0, "series": [{"data": [[0.0, 158.0], [0.1, 158.0], [0.2, 160.0], [0.3, 160.0], [0.4, 162.0], [0.5, 162.0], [0.6, 162.0], [0.7, 162.0], [0.8, 163.0], [0.9, 163.0], [1.0, 163.0], [1.1, 163.0], [1.2, 163.0], [1.3, 163.0], [1.4, 164.0], [1.5, 164.0], [1.6, 164.0], [1.7, 164.0], [1.8, 164.0], [1.9, 164.0], [2.0, 165.0], [2.1, 165.0], [2.2, 165.0], [2.3, 165.0], [2.4, 165.0], [2.5, 165.0], [2.6, 166.0], [2.7, 166.0], [2.8, 166.0], [2.9, 166.0], [3.0, 166.0], [3.1, 166.0], [3.2, 166.0], [3.3, 166.0], [3.4, 166.0], [3.5, 166.0], [3.6, 167.0], [3.7, 167.0], [3.8, 167.0], [3.9, 167.0], [4.0, 167.0], [4.1, 167.0], [4.2, 167.0], [4.3, 167.0], [4.4, 167.0], [4.5, 168.0], [4.6, 168.0], [4.7, 168.0], [4.8, 168.0], [4.9, 168.0], [5.0, 168.0], [5.1, 168.0], [5.2, 168.0], [5.3, 168.0], [5.4, 168.0], [5.5, 168.0], [5.6, 168.0], [5.7, 168.0], [5.8, 168.0], [5.9, 168.0], [6.0, 168.0], [6.1, 168.0], [6.2, 168.0], [6.3, 168.0], [6.4, 169.0], [6.5, 169.0], [6.6, 169.0], [6.7, 169.0], [6.8, 169.0], [6.9, 169.0], [7.0, 169.0], [7.1, 169.0], [7.2, 169.0], [7.3, 169.0], [7.4, 169.0], [7.5, 169.0], [7.6, 169.0], [7.7, 169.0], [7.8, 170.0], [7.9, 170.0], [8.0, 170.0], [8.1, 170.0], [8.2, 170.0], [8.3, 170.0], [8.4, 170.0], [8.5, 170.0], [8.6, 170.0], [8.7, 170.0], [8.8, 170.0], [8.9, 170.0], [9.0, 170.0], [9.1, 170.0], [9.2, 170.0], [9.3, 170.0], [9.4, 170.0], [9.5, 170.0], [9.6, 170.0], [9.7, 170.0], [9.8, 170.0], [9.9, 170.0], [10.0, 170.0], [10.1, 171.0], [10.2, 171.0], [10.3, 171.0], [10.4, 171.0], [10.5, 171.0], [10.6, 171.0], [10.7, 171.0], [10.8, 171.0], [10.9, 171.0], [11.0, 171.0], [11.1, 171.0], [11.2, 171.0], [11.3, 171.0], [11.4, 171.0], [11.5, 171.0], [11.6, 171.0], [11.7, 171.0], [11.8, 171.0], [11.9, 171.0], [12.0, 171.0], [12.1, 171.0], [12.2, 171.0], [12.3, 171.0], [12.4, 171.0], [12.5, 171.0], [12.6, 171.0], [12.7, 171.0], [12.8, 171.0], [12.9, 171.0], [13.0, 171.0], [13.1, 172.0], [13.2, 172.0], [13.3, 172.0], [13.4, 172.0], [13.5, 172.0], [13.6, 172.0], [13.7, 172.0], [13.8, 172.0], [13.9, 172.0], [14.0, 172.0], [14.1, 172.0], [14.2, 172.0], [14.3, 172.0], [14.4, 172.0], [14.5, 172.0], [14.6, 172.0], [14.7, 172.0], [14.8, 172.0], [14.9, 172.0], [15.0, 172.0], [15.1, 172.0], [15.2, 172.0], [15.3, 172.0], [15.4, 172.0], [15.5, 172.0], [15.6, 172.0], [15.7, 172.0], [15.8, 172.0], [15.9, 172.0], [16.0, 172.0], [16.1, 172.0], [16.2, 172.0], [16.3, 173.0], [16.4, 173.0], [16.5, 173.0], [16.6, 173.0], [16.7, 173.0], [16.8, 173.0], [16.9, 173.0], [17.0, 173.0], [17.1, 173.0], [17.2, 173.0], [17.3, 173.0], [17.4, 173.0], [17.5, 173.0], [17.6, 173.0], [17.7, 173.0], [17.8, 173.0], [17.9, 173.0], [18.0, 173.0], [18.1, 173.0], [18.2, 173.0], [18.3, 173.0], [18.4, 173.0], [18.5, 173.0], [18.6, 173.0], [18.7, 173.0], [18.8, 173.0], [18.9, 173.0], [19.0, 173.0], [19.1, 173.0], [19.2, 173.0], [19.3, 173.0], [19.4, 173.0], [19.5, 173.0], [19.6, 173.0], [19.7, 174.0], [19.8, 174.0], [19.9, 174.0], [20.0, 174.0], [20.1, 174.0], [20.2, 174.0], [20.3, 174.0], [20.4, 174.0], [20.5, 174.0], [20.6, 174.0], [20.7, 174.0], [20.8, 174.0], [20.9, 174.0], [21.0, 174.0], [21.1, 174.0], [21.2, 174.0], [21.3, 174.0], [21.4, 174.0], [21.5, 174.0], [21.6, 174.0], [21.7, 174.0], [21.8, 174.0], [21.9, 174.0], [22.0, 174.0], [22.1, 174.0], [22.2, 174.0], [22.3, 174.0], [22.4, 174.0], [22.5, 174.0], [22.6, 174.0], [22.7, 174.0], [22.8, 175.0], [22.9, 175.0], [23.0, 175.0], [23.1, 175.0], [23.2, 175.0], [23.3, 175.0], [23.4, 175.0], [23.5, 175.0], [23.6, 175.0], [23.7, 175.0], [23.8, 175.0], [23.9, 175.0], [24.0, 175.0], [24.1, 175.0], [24.2, 175.0], [24.3, 175.0], [24.4, 175.0], [24.5, 175.0], [24.6, 175.0], [24.7, 175.0], [24.8, 175.0], [24.9, 175.0], [25.0, 175.0], [25.1, 175.0], [25.2, 175.0], [25.3, 175.0], [25.4, 175.0], [25.5, 175.0], [25.6, 175.0], [25.7, 175.0], [25.8, 175.0], [25.9, 175.0], [26.0, 175.0], [26.1, 175.0], [26.2, 175.0], [26.3, 175.0], [26.4, 175.0], [26.5, 175.0], [26.6, 175.0], [26.7, 175.0], [26.8, 175.0], [26.9, 176.0], [27.0, 176.0], [27.1, 176.0], [27.2, 176.0], [27.3, 176.0], [27.4, 176.0], [27.5, 176.0], [27.6, 176.0], [27.7, 176.0], [27.8, 176.0], [27.9, 176.0], [28.0, 176.0], [28.1, 176.0], [28.2, 176.0], [28.3, 176.0], [28.4, 176.0], [28.5, 176.0], [28.6, 176.0], [28.7, 176.0], [28.8, 176.0], [28.9, 176.0], [29.0, 176.0], [29.1, 176.0], [29.2, 176.0], [29.3, 176.0], [29.4, 176.0], [29.5, 176.0], [29.6, 176.0], [29.7, 176.0], [29.8, 176.0], [29.9, 176.0], [30.0, 176.0], [30.1, 176.0], [30.2, 176.0], [30.3, 176.0], [30.4, 176.0], [30.5, 176.0], [30.6, 176.0], [30.7, 176.0], [30.8, 176.0], [30.9, 176.0], [31.0, 176.0], [31.1, 176.0], [31.2, 176.0], [31.3, 176.0], [31.4, 176.0], [31.5, 176.0], [31.6, 177.0], [31.7, 177.0], [31.8, 177.0], [31.9, 177.0], [32.0, 177.0], [32.1, 177.0], [32.2, 177.0], [32.3, 177.0], [32.4, 177.0], [32.5, 177.0], [32.6, 177.0], [32.7, 177.0], [32.8, 177.0], [32.9, 177.0], [33.0, 177.0], [33.1, 177.0], [33.2, 177.0], [33.3, 177.0], [33.4, 177.0], [33.5, 177.0], [33.6, 177.0], [33.7, 177.0], [33.8, 177.0], [33.9, 177.0], [34.0, 177.0], [34.1, 177.0], [34.2, 177.0], [34.3, 177.0], [34.4, 177.0], [34.5, 177.0], [34.6, 177.0], [34.7, 177.0], [34.8, 177.0], [34.9, 177.0], [35.0, 177.0], [35.1, 177.0], [35.2, 177.0], [35.3, 177.0], [35.4, 177.0], [35.5, 177.0], [35.6, 177.0], [35.7, 177.0], [35.8, 177.0], [35.9, 177.0], [36.0, 177.0], [36.1, 177.0], [36.2, 177.0], [36.3, 177.0], [36.4, 178.0], [36.5, 178.0], [36.6, 178.0], [36.7, 178.0], [36.8, 178.0], [36.9, 178.0], [37.0, 178.0], [37.1, 178.0], [37.2, 178.0], [37.3, 178.0], [37.4, 178.0], [37.5, 178.0], [37.6, 178.0], [37.7, 178.0], [37.8, 178.0], [37.9, 178.0], [38.0, 178.0], [38.1, 178.0], [38.2, 178.0], [38.3, 178.0], [38.4, 178.0], [38.5, 178.0], [38.6, 178.0], [38.7, 178.0], [38.8, 178.0], [38.9, 178.0], [39.0, 178.0], [39.1, 178.0], [39.2, 178.0], [39.3, 178.0], [39.4, 178.0], [39.5, 178.0], [39.6, 178.0], [39.7, 178.0], [39.8, 178.0], [39.9, 178.0], [40.0, 178.0], [40.1, 178.0], [40.2, 178.0], [40.3, 178.0], [40.4, 178.0], [40.5, 179.0], [40.6, 179.0], [40.7, 179.0], [40.8, 179.0], [40.9, 179.0], [41.0, 179.0], [41.1, 179.0], [41.2, 179.0], [41.3, 179.0], [41.4, 179.0], [41.5, 179.0], [41.6, 179.0], [41.7, 179.0], [41.8, 179.0], [41.9, 179.0], [42.0, 179.0], [42.1, 179.0], [42.2, 179.0], [42.3, 179.0], [42.4, 179.0], [42.5, 179.0], [42.6, 179.0], [42.7, 179.0], [42.8, 179.0], [42.9, 179.0], [43.0, 179.0], [43.1, 179.0], [43.2, 179.0], [43.3, 179.0], [43.4, 179.0], [43.5, 179.0], [43.6, 179.0], [43.7, 179.0], [43.8, 179.0], [43.9, 179.0], [44.0, 179.0], [44.1, 179.0], [44.2, 179.0], [44.3, 179.0], [44.4, 179.0], [44.5, 179.0], [44.6, 179.0], [44.7, 179.0], [44.8, 179.0], [44.9, 179.0], [45.0, 179.0], [45.1, 180.0], [45.2, 180.0], [45.3, 180.0], [45.4, 180.0], [45.5, 180.0], [45.6, 180.0], [45.7, 180.0], [45.8, 180.0], [45.9, 180.0], [46.0, 180.0], [46.1, 180.0], [46.2, 180.0], [46.3, 180.0], [46.4, 180.0], [46.5, 180.0], [46.6, 180.0], [46.7, 180.0], [46.8, 180.0], [46.9, 180.0], [47.0, 180.0], [47.1, 180.0], [47.2, 180.0], [47.3, 180.0], [47.4, 180.0], [47.5, 180.0], [47.6, 180.0], [47.7, 180.0], [47.8, 180.0], [47.9, 180.0], [48.0, 180.0], [48.1, 180.0], [48.2, 180.0], [48.3, 180.0], [48.4, 180.0], [48.5, 180.0], [48.6, 180.0], [48.7, 180.0], [48.8, 180.0], [48.9, 180.0], [49.0, 180.0], [49.1, 181.0], [49.2, 181.0], [49.3, 181.0], [49.4, 181.0], [49.5, 181.0], [49.6, 181.0], [49.7, 181.0], [49.8, 181.0], [49.9, 181.0], [50.0, 181.0], [50.1, 181.0], [50.2, 181.0], [50.3, 181.0], [50.4, 181.0], [50.5, 181.0], [50.6, 181.0], [50.7, 181.0], [50.8, 181.0], [50.9, 181.0], [51.0, 181.0], [51.1, 181.0], [51.2, 181.0], [51.3, 181.0], [51.4, 181.0], [51.5, 181.0], [51.6, 181.0], [51.7, 181.0], [51.8, 181.0], [51.9, 181.0], [52.0, 181.0], [52.1, 181.0], [52.2, 181.0], [52.3, 181.0], [52.4, 181.0], [52.5, 181.0], [52.6, 181.0], [52.7, 181.0], [52.8, 181.0], [52.9, 181.0], [53.0, 181.0], [53.1, 181.0], [53.2, 181.0], [53.3, 182.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 182.0], [53.8, 182.0], [53.9, 182.0], [54.0, 182.0], [54.1, 182.0], [54.2, 182.0], [54.3, 182.0], [54.4, 182.0], [54.5, 182.0], [54.6, 182.0], [54.7, 182.0], [54.8, 182.0], [54.9, 182.0], [55.0, 182.0], [55.1, 182.0], [55.2, 182.0], [55.3, 182.0], [55.4, 182.0], [55.5, 182.0], [55.6, 182.0], [55.7, 182.0], [55.8, 182.0], [55.9, 182.0], [56.0, 182.0], [56.1, 182.0], [56.2, 182.0], [56.3, 182.0], [56.4, 182.0], [56.5, 182.0], [56.6, 182.0], [56.7, 182.0], [56.8, 182.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 183.0], [57.3, 183.0], [57.4, 183.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 183.0], [57.9, 183.0], [58.0, 183.0], [58.1, 183.0], [58.2, 183.0], [58.3, 183.0], [58.4, 183.0], [58.5, 183.0], [58.6, 183.0], [58.7, 183.0], [58.8, 183.0], [58.9, 183.0], [59.0, 183.0], [59.1, 183.0], [59.2, 183.0], [59.3, 183.0], [59.4, 183.0], [59.5, 183.0], [59.6, 183.0], [59.7, 183.0], [59.8, 183.0], [59.9, 183.0], [60.0, 183.0], [60.1, 183.0], [60.2, 183.0], [60.3, 184.0], [60.4, 184.0], [60.5, 184.0], [60.6, 184.0], [60.7, 184.0], [60.8, 184.0], [60.9, 184.0], [61.0, 184.0], [61.1, 184.0], [61.2, 184.0], [61.3, 184.0], [61.4, 184.0], [61.5, 184.0], [61.6, 184.0], [61.7, 184.0], [61.8, 184.0], [61.9, 184.0], [62.0, 184.0], [62.1, 184.0], [62.2, 184.0], [62.3, 184.0], [62.4, 184.0], [62.5, 184.0], [62.6, 184.0], [62.7, 184.0], [62.8, 184.0], [62.9, 184.0], [63.0, 184.0], [63.1, 184.0], [63.2, 184.0], [63.3, 184.0], [63.4, 185.0], [63.5, 185.0], [63.6, 185.0], [63.7, 185.0], [63.8, 185.0], [63.9, 185.0], [64.0, 185.0], [64.1, 185.0], [64.2, 185.0], [64.3, 185.0], [64.4, 185.0], [64.5, 185.0], [64.6, 185.0], [64.7, 185.0], [64.8, 185.0], [64.9, 185.0], [65.0, 185.0], [65.1, 185.0], [65.2, 185.0], [65.3, 185.0], [65.4, 185.0], [65.5, 185.0], [65.6, 185.0], [65.7, 185.0], [65.8, 185.0], [65.9, 185.0], [66.0, 185.0], [66.1, 185.0], [66.2, 185.0], [66.3, 185.0], [66.4, 185.0], [66.5, 185.0], [66.6, 185.0], [66.7, 185.0], [66.8, 185.0], [66.9, 185.0], [67.0, 185.0], [67.1, 185.0], [67.2, 186.0], [67.3, 186.0], [67.4, 186.0], [67.5, 186.0], [67.6, 186.0], [67.7, 186.0], [67.8, 186.0], [67.9, 186.0], [68.0, 186.0], [68.1, 186.0], [68.2, 186.0], [68.3, 186.0], [68.4, 186.0], [68.5, 186.0], [68.6, 186.0], [68.7, 186.0], [68.8, 186.0], [68.9, 186.0], [69.0, 186.0], [69.1, 186.0], [69.2, 186.0], [69.3, 186.0], [69.4, 186.0], [69.5, 186.0], [69.6, 186.0], [69.7, 186.0], [69.8, 186.0], [69.9, 186.0], [70.0, 186.0], [70.1, 186.0], [70.2, 186.0], [70.3, 186.0], [70.4, 186.0], [70.5, 186.0], [70.6, 186.0], [70.7, 186.0], [70.8, 186.0], [70.9, 186.0], [71.0, 186.0], [71.1, 186.0], [71.2, 186.0], [71.3, 187.0], [71.4, 187.0], [71.5, 187.0], [71.6, 187.0], [71.7, 187.0], [71.8, 187.0], [71.9, 187.0], [72.0, 187.0], [72.1, 187.0], [72.2, 187.0], [72.3, 187.0], [72.4, 187.0], [72.5, 187.0], [72.6, 187.0], [72.7, 187.0], [72.8, 187.0], [72.9, 187.0], [73.0, 187.0], [73.1, 187.0], [73.2, 187.0], [73.3, 187.0], [73.4, 187.0], [73.5, 187.0], [73.6, 187.0], [73.7, 188.0], [73.8, 188.0], [73.9, 188.0], [74.0, 188.0], [74.1, 188.0], [74.2, 188.0], [74.3, 188.0], [74.4, 188.0], [74.5, 188.0], [74.6, 188.0], [74.7, 188.0], [74.8, 188.0], [74.9, 188.0], [75.0, 188.0], [75.1, 188.0], [75.2, 188.0], [75.3, 188.0], [75.4, 188.0], [75.5, 188.0], [75.6, 188.0], [75.7, 188.0], [75.8, 188.0], [75.9, 189.0], [76.0, 189.0], [76.1, 189.0], [76.2, 189.0], [76.3, 189.0], [76.4, 189.0], [76.5, 189.0], [76.6, 189.0], [76.7, 189.0], [76.8, 189.0], [76.9, 189.0], [77.0, 189.0], [77.1, 189.0], [77.2, 189.0], [77.3, 189.0], [77.4, 189.0], [77.5, 189.0], [77.6, 189.0], [77.7, 190.0], [77.8, 190.0], [77.9, 190.0], [78.0, 190.0], [78.1, 190.0], [78.2, 190.0], [78.3, 190.0], [78.4, 190.0], [78.5, 190.0], [78.6, 190.0], [78.7, 190.0], [78.8, 190.0], [78.9, 190.0], [79.0, 190.0], [79.1, 190.0], [79.2, 190.0], [79.3, 191.0], [79.4, 191.0], [79.5, 191.0], [79.6, 191.0], [79.7, 191.0], [79.8, 191.0], [79.9, 191.0], [80.0, 191.0], [80.1, 191.0], [80.2, 191.0], [80.3, 191.0], [80.4, 191.0], [80.5, 192.0], [80.6, 192.0], [80.7, 192.0], [80.8, 192.0], [80.9, 192.0], [81.0, 192.0], [81.1, 192.0], [81.2, 192.0], [81.3, 192.0], [81.4, 192.0], [81.5, 192.0], [81.6, 192.0], [81.7, 192.0], [81.8, 193.0], [81.9, 193.0], [82.0, 193.0], [82.1, 193.0], [82.2, 193.0], [82.3, 193.0], [82.4, 193.0], [82.5, 193.0], [82.6, 193.0], [82.7, 193.0], [82.8, 193.0], [82.9, 193.0], [83.0, 193.0], [83.1, 194.0], [83.2, 194.0], [83.3, 194.0], [83.4, 194.0], [83.5, 194.0], [83.6, 194.0], [83.7, 194.0], [83.8, 194.0], [83.9, 194.0], [84.0, 194.0], [84.1, 194.0], [84.2, 194.0], [84.3, 195.0], [84.4, 195.0], [84.5, 195.0], [84.6, 196.0], [84.7, 196.0], [84.8, 196.0], [84.9, 196.0], [85.0, 196.0], [85.1, 196.0], [85.2, 196.0], [85.3, 197.0], [85.4, 197.0], [85.5, 197.0], [85.6, 197.0], [85.7, 198.0], [85.8, 198.0], [85.9, 198.0], [86.0, 198.0], [86.1, 198.0], [86.2, 198.0], [86.3, 198.0], [86.4, 199.0], [86.5, 199.0], [86.6, 199.0], [86.7, 199.0], [86.8, 199.0], [86.9, 200.0], [87.0, 200.0], [87.1, 200.0], [87.2, 201.0], [87.3, 201.0], [87.4, 201.0], [87.5, 201.0], [87.6, 201.0], [87.7, 201.0], [87.8, 201.0], [87.9, 202.0], [88.0, 202.0], [88.1, 202.0], [88.2, 202.0], [88.3, 203.0], [88.4, 203.0], [88.5, 203.0], [88.6, 204.0], [88.7, 205.0], [88.8, 205.0], [88.9, 205.0], [89.0, 206.0], [89.1, 206.0], [89.2, 206.0], [89.3, 207.0], [89.4, 207.0], [89.5, 207.0], [89.6, 208.0], [89.7, 209.0], [89.8, 209.0], [89.9, 210.0], [90.0, 210.0], [90.1, 210.0], [90.2, 210.0], [90.3, 210.0], [90.4, 211.0], [90.5, 211.0], [90.6, 211.0], [90.7, 212.0], [90.8, 212.0], [90.9, 213.0], [91.0, 213.0], [91.1, 213.0], [91.2, 213.0], [91.3, 214.0], [91.4, 214.0], [91.5, 214.0], [91.6, 214.0], [91.7, 215.0], [91.8, 215.0], [91.9, 216.0], [92.0, 216.0], [92.1, 216.0], [92.2, 218.0], [92.3, 218.0], [92.4, 218.0], [92.5, 219.0], [92.6, 219.0], [92.7, 220.0], [92.8, 220.0], [92.9, 221.0], [93.0, 221.0], [93.1, 222.0], [93.2, 222.0], [93.3, 223.0], [93.4, 223.0], [93.5, 224.0], [93.6, 226.0], [93.7, 226.0], [93.8, 227.0], [93.9, 227.0], [94.0, 229.0], [94.1, 230.0], [94.2, 231.0], [94.3, 234.0], [94.4, 236.0], [94.5, 239.0], [94.6, 241.0], [94.7, 243.0], [94.8, 244.0], [94.9, 247.0], [95.0, 247.0], [95.1, 254.0], [95.2, 256.0], [95.3, 258.0], [95.4, 260.0], [95.5, 269.0], [95.6, 272.0], [95.7, 281.0], [95.8, 289.0], [95.9, 293.0], [96.0, 293.0], [96.1, 297.0], [96.2, 299.0], [96.3, 304.0], [96.4, 306.0], [96.5, 313.0], [96.6, 326.0], [96.7, 343.0], [96.8, 371.0], [96.9, 372.0], [97.0, 384.0], [97.1, 385.0], [97.2, 438.0], [97.3, 443.0], [97.4, 457.0], [97.5, 465.0], [97.6, 474.0], [97.7, 482.0], [97.8, 483.0], [97.9, 483.0], [98.0, 485.0], [98.1, 493.0], [98.2, 500.0], [98.3, 503.0], [98.4, 509.0], [98.5, 513.0], [98.6, 518.0], [98.7, 518.0], [98.8, 663.0], [98.9, 699.0], [99.0, 956.0], [99.1, 1167.0], [99.2, 1178.0], [99.3, 1178.0], [99.4, 1187.0], [99.5, 1189.0], [99.6, 1197.0], [99.7, 1217.0], [99.8, 1232.0], [99.9, 1245.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1303.0, "series": [{"data": [[1100.0, 9.0], [300.0, 14.0], [1200.0, 5.0], [600.0, 2.0], [700.0, 1.0], [200.0, 140.0], [100.0, 1303.0], [400.0, 16.0], [900.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1474.0, "series": [{"data": [[0.0, 1474.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.1375838926174493, "minX": 1.7285919E12, "maxY": 1.454954954954955, "series": [{"data": [[1.72859208E12, 1.1375838926174493], [1.72859196E12, 1.2299999999999998], [1.72859214E12, 1.1872909698996659], [1.72859202E12, 1.2450331125827823], [1.7285922E12, 1.1772151898734176], [1.7285919E12, 1.454954954954955]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 182.35440931780363, "minX": 1.0, "maxY": 1232.0, "series": [{"data": [[8.0, 956.0], [4.0, 403.6666666666667], [2.0, 256.4555555555555], [1.0, 182.35440931780363], [9.0, 290.5], [5.0, 1232.0], [6.0, 1167.0], [3.0, 373.52631578947364], [7.0, 1217.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.2366666666666672, 201.26266666666672]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 158.0, "minX": 1.7285919E12, "maxY": 339898.11666666664, "series": [{"data": [[1.72859208E12, 335397.1666666667], [1.72859196E12, 337644.18333333335], [1.72859214E12, 336523.01666666666], [1.72859202E12, 339898.11666666664], [1.7285922E12, 88914.1], [1.7285919E12, 249853.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72859208E12, 596.0], [1.72859196E12, 600.0], [1.72859214E12, 598.0], [1.72859202E12, 604.0], [1.7285922E12, 158.0], [1.7285919E12, 444.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 191.43624161073816, "minX": 1.7285919E12, "maxY": 222.70270270270274, "series": [{"data": [[1.72859208E12, 191.43624161073816], [1.72859196E12, 199.05999999999983], [1.72859214E12, 201.1103678929765], [1.72859202E12, 198.771523178808], [1.7285922E12, 196.54430379746833], [1.7285919E12, 222.70270270270274]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 146.0973154362415, "minX": 1.7285919E12, "maxY": 172.436936936937, "series": [{"data": [[1.72859208E12, 146.0973154362415], [1.72859196E12, 152.97333333333327], [1.72859214E12, 156.20066889632105], [1.72859202E12, 151.6059602649006], [1.7285922E12, 151.21518987341773], [1.7285919E12, 172.436936936937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 97.33557046979861, "minX": 1.7285919E12, "maxY": 120.54954954954948, "series": [{"data": [[1.72859208E12, 97.33557046979861], [1.72859196E12, 103.03000000000002], [1.72859214E12, 107.41806020066896], [1.72859202E12, 102.66225165562913], [1.7285922E12, 104.8101265822785], [1.7285919E12, 120.54954954954948]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 158.0, "minX": 1.7285919E12, "maxY": 1259.0, "series": [{"data": [[1.72859208E12, 1178.0], [1.72859196E12, 1197.0], [1.72859214E12, 1228.0], [1.72859202E12, 1197.0], [1.7285922E12, 1182.0], [1.7285919E12, 1259.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72859208E12, 201.0], [1.72859196E12, 208.90000000000003], [1.72859214E12, 210.0], [1.72859202E12, 209.39999999999998], [1.7285922E12, 201.0], [1.7285919E12, 224.2000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72859208E12, 500.1299999999999], [1.72859196E12, 698.6400000000003], [1.72859214E12, 1174.0], [1.72859202E12, 518.0], [1.7285922E12, 1182.0], [1.7285919E12, 1242.0100000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72859208E12, 219.10000000000002], [1.72859196E12, 257.1499999999998], [1.72859214E12, 281.0], [1.72859202E12, 258.04999999999956], [1.7285922E12, 236.0], [1.7285919E12, 411.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72859208E12, 161.0], [1.72859196E12, 165.0], [1.72859214E12, 160.0], [1.72859202E12, 158.0], [1.7285922E12, 158.0], [1.7285919E12, 160.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72859208E12, 179.0], [1.72859196E12, 181.5], [1.72859214E12, 181.0], [1.72859202E12, 180.0], [1.7285922E12, 183.0], [1.7285919E12, 183.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 180.0, "minX": 1.0, "maxY": 746.0, "series": [{"data": [[1.0, 343.0], [4.0, 183.5], [5.0, 180.0], [6.0, 184.0], [3.0, 184.0], [13.0, 746.0], [7.0, 189.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 136.0, "minX": 1.0, "maxY": 502.0, "series": [{"data": [[1.0, 291.0], [4.0, 139.0], [5.0, 136.0], [6.0, 141.0], [3.0, 138.0], [13.0, 502.0], [7.0, 144.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.7285919E12, "maxY": 5.016666666666667, "series": [{"data": [[1.72859208E12, 4.983333333333333], [1.72859196E12, 5.0], [1.72859214E12, 5.0], [1.72859202E12, 5.016666666666667], [1.7285922E12, 1.2833333333333334], [1.7285919E12, 3.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.7285919E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72859208E12, 4.966666666666667], [1.72859196E12, 5.0], [1.72859214E12, 4.983333333333333], [1.72859202E12, 5.033333333333333], [1.7285922E12, 1.3166666666666667], [1.7285919E12, 3.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7285922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.7285919E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72859208E12, 4.966666666666667], [1.72859196E12, 5.0], [1.72859214E12, 4.983333333333333], [1.72859202E12, 5.033333333333333], [1.7285922E12, 1.3166666666666667], [1.7285919E12, 3.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3166666666666667, "minX": 1.7285919E12, "maxY": 5.033333333333333, "series": [{"data": [[1.72859208E12, 4.966666666666667], [1.72859196E12, 5.0], [1.72859214E12, 4.983333333333333], [1.72859202E12, 5.033333333333333], [1.7285922E12, 1.3166666666666667], [1.7285919E12, 3.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7285922E12, "title": "Total Transactions Per Second"}},
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

