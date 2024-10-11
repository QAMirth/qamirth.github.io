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
        data: {"result": {"minY": 156.0, "minX": 0.0, "maxY": 2142.0, "series": [{"data": [[0.0, 156.0], [0.1, 158.0], [0.2, 159.0], [0.3, 160.0], [0.4, 160.0], [0.5, 160.0], [0.6, 160.0], [0.7, 161.0], [0.8, 161.0], [0.9, 161.0], [1.0, 161.0], [1.1, 161.0], [1.2, 161.0], [1.3, 162.0], [1.4, 162.0], [1.5, 162.0], [1.6, 162.0], [1.7, 162.0], [1.8, 162.0], [1.9, 162.0], [2.0, 162.0], [2.1, 162.0], [2.2, 162.0], [2.3, 162.0], [2.4, 163.0], [2.5, 163.0], [2.6, 163.0], [2.7, 163.0], [2.8, 163.0], [2.9, 163.0], [3.0, 164.0], [3.1, 164.0], [3.2, 164.0], [3.3, 164.0], [3.4, 164.0], [3.5, 164.0], [3.6, 164.0], [3.7, 164.0], [3.8, 164.0], [3.9, 164.0], [4.0, 165.0], [4.1, 165.0], [4.2, 165.0], [4.3, 165.0], [4.4, 165.0], [4.5, 165.0], [4.6, 165.0], [4.7, 165.0], [4.8, 165.0], [4.9, 165.0], [5.0, 165.0], [5.1, 165.0], [5.2, 165.0], [5.3, 165.0], [5.4, 165.0], [5.5, 165.0], [5.6, 166.0], [5.7, 166.0], [5.8, 166.0], [5.9, 166.0], [6.0, 166.0], [6.1, 166.0], [6.2, 166.0], [6.3, 166.0], [6.4, 166.0], [6.5, 166.0], [6.6, 166.0], [6.7, 166.0], [6.8, 166.0], [6.9, 166.0], [7.0, 166.0], [7.1, 166.0], [7.2, 166.0], [7.3, 167.0], [7.4, 167.0], [7.5, 167.0], [7.6, 167.0], [7.7, 167.0], [7.8, 167.0], [7.9, 167.0], [8.0, 167.0], [8.1, 167.0], [8.2, 167.0], [8.3, 167.0], [8.4, 167.0], [8.5, 167.0], [8.6, 167.0], [8.7, 168.0], [8.8, 168.0], [8.9, 168.0], [9.0, 168.0], [9.1, 168.0], [9.2, 168.0], [9.3, 168.0], [9.4, 168.0], [9.5, 168.0], [9.6, 168.0], [9.7, 168.0], [9.8, 168.0], [9.9, 168.0], [10.0, 168.0], [10.1, 168.0], [10.2, 168.0], [10.3, 168.0], [10.4, 168.0], [10.5, 168.0], [10.6, 169.0], [10.7, 169.0], [10.8, 169.0], [10.9, 169.0], [11.0, 169.0], [11.1, 169.0], [11.2, 169.0], [11.3, 169.0], [11.4, 169.0], [11.5, 169.0], [11.6, 169.0], [11.7, 169.0], [11.8, 169.0], [11.9, 169.0], [12.0, 169.0], [12.1, 169.0], [12.2, 169.0], [12.3, 169.0], [12.4, 169.0], [12.5, 169.0], [12.6, 169.0], [12.7, 169.0], [12.8, 169.0], [12.9, 169.0], [13.0, 169.0], [13.1, 170.0], [13.2, 170.0], [13.3, 170.0], [13.4, 170.0], [13.5, 170.0], [13.6, 170.0], [13.7, 170.0], [13.8, 170.0], [13.9, 170.0], [14.0, 170.0], [14.1, 170.0], [14.2, 170.0], [14.3, 170.0], [14.4, 170.0], [14.5, 170.0], [14.6, 170.0], [14.7, 170.0], [14.8, 170.0], [14.9, 171.0], [15.0, 171.0], [15.1, 171.0], [15.2, 171.0], [15.3, 171.0], [15.4, 171.0], [15.5, 171.0], [15.6, 171.0], [15.7, 171.0], [15.8, 171.0], [15.9, 171.0], [16.0, 171.0], [16.1, 171.0], [16.2, 171.0], [16.3, 171.0], [16.4, 171.0], [16.5, 171.0], [16.6, 171.0], [16.7, 171.0], [16.8, 171.0], [16.9, 171.0], [17.0, 171.0], [17.1, 171.0], [17.2, 171.0], [17.3, 171.0], [17.4, 171.0], [17.5, 171.0], [17.6, 171.0], [17.7, 171.0], [17.8, 172.0], [17.9, 172.0], [18.0, 172.0], [18.1, 172.0], [18.2, 172.0], [18.3, 172.0], [18.4, 172.0], [18.5, 172.0], [18.6, 172.0], [18.7, 172.0], [18.8, 172.0], [18.9, 172.0], [19.0, 172.0], [19.1, 172.0], [19.2, 172.0], [19.3, 172.0], [19.4, 172.0], [19.5, 172.0], [19.6, 172.0], [19.7, 172.0], [19.8, 172.0], [19.9, 172.0], [20.0, 172.0], [20.1, 172.0], [20.2, 172.0], [20.3, 172.0], [20.4, 172.0], [20.5, 172.0], [20.6, 172.0], [20.7, 172.0], [20.8, 172.0], [20.9, 172.0], [21.0, 172.0], [21.1, 172.0], [21.2, 172.0], [21.3, 172.0], [21.4, 172.0], [21.5, 173.0], [21.6, 173.0], [21.7, 173.0], [21.8, 173.0], [21.9, 173.0], [22.0, 173.0], [22.1, 173.0], [22.2, 173.0], [22.3, 173.0], [22.4, 173.0], [22.5, 173.0], [22.6, 173.0], [22.7, 173.0], [22.8, 173.0], [22.9, 173.0], [23.0, 173.0], [23.1, 173.0], [23.2, 173.0], [23.3, 173.0], [23.4, 173.0], [23.5, 173.0], [23.6, 173.0], [23.7, 173.0], [23.8, 173.0], [23.9, 173.0], [24.0, 173.0], [24.1, 173.0], [24.2, 173.0], [24.3, 173.0], [24.4, 173.0], [24.5, 173.0], [24.6, 173.0], [24.7, 173.0], [24.8, 173.0], [24.9, 173.0], [25.0, 174.0], [25.1, 174.0], [25.2, 174.0], [25.3, 174.0], [25.4, 174.0], [25.5, 174.0], [25.6, 174.0], [25.7, 174.0], [25.8, 174.0], [25.9, 174.0], [26.0, 174.0], [26.1, 174.0], [26.2, 174.0], [26.3, 174.0], [26.4, 174.0], [26.5, 174.0], [26.6, 174.0], [26.7, 174.0], [26.8, 174.0], [26.9, 174.0], [27.0, 174.0], [27.1, 174.0], [27.2, 174.0], [27.3, 174.0], [27.4, 174.0], [27.5, 174.0], [27.6, 174.0], [27.7, 174.0], [27.8, 174.0], [27.9, 174.0], [28.0, 174.0], [28.1, 174.0], [28.2, 174.0], [28.3, 174.0], [28.4, 174.0], [28.5, 174.0], [28.6, 174.0], [28.7, 174.0], [28.8, 174.0], [28.9, 174.0], [29.0, 175.0], [29.1, 175.0], [29.2, 175.0], [29.3, 175.0], [29.4, 175.0], [29.5, 175.0], [29.6, 175.0], [29.7, 175.0], [29.8, 175.0], [29.9, 175.0], [30.0, 175.0], [30.1, 175.0], [30.2, 175.0], [30.3, 175.0], [30.4, 175.0], [30.5, 175.0], [30.6, 175.0], [30.7, 175.0], [30.8, 175.0], [30.9, 175.0], [31.0, 175.0], [31.1, 175.0], [31.2, 175.0], [31.3, 175.0], [31.4, 175.0], [31.5, 175.0], [31.6, 175.0], [31.7, 175.0], [31.8, 175.0], [31.9, 175.0], [32.0, 175.0], [32.1, 175.0], [32.2, 175.0], [32.3, 175.0], [32.4, 175.0], [32.5, 175.0], [32.6, 175.0], [32.7, 175.0], [32.8, 175.0], [32.9, 175.0], [33.0, 176.0], [33.1, 176.0], [33.2, 176.0], [33.3, 176.0], [33.4, 176.0], [33.5, 176.0], [33.6, 176.0], [33.7, 176.0], [33.8, 176.0], [33.9, 176.0], [34.0, 176.0], [34.1, 176.0], [34.2, 176.0], [34.3, 176.0], [34.4, 176.0], [34.5, 176.0], [34.6, 176.0], [34.7, 176.0], [34.8, 176.0], [34.9, 176.0], [35.0, 176.0], [35.1, 176.0], [35.2, 176.0], [35.3, 176.0], [35.4, 176.0], [35.5, 176.0], [35.6, 176.0], [35.7, 176.0], [35.8, 176.0], [35.9, 176.0], [36.0, 176.0], [36.1, 176.0], [36.2, 176.0], [36.3, 176.0], [36.4, 176.0], [36.5, 176.0], [36.6, 176.0], [36.7, 176.0], [36.8, 176.0], [36.9, 176.0], [37.0, 176.0], [37.1, 176.0], [37.2, 176.0], [37.3, 176.0], [37.4, 176.0], [37.5, 176.0], [37.6, 176.0], [37.7, 176.0], [37.8, 176.0], [37.9, 177.0], [38.0, 177.0], [38.1, 177.0], [38.2, 177.0], [38.3, 177.0], [38.4, 177.0], [38.5, 177.0], [38.6, 177.0], [38.7, 177.0], [38.8, 177.0], [38.9, 177.0], [39.0, 177.0], [39.1, 177.0], [39.2, 177.0], [39.3, 177.0], [39.4, 177.0], [39.5, 177.0], [39.6, 177.0], [39.7, 177.0], [39.8, 177.0], [39.9, 177.0], [40.0, 177.0], [40.1, 177.0], [40.2, 177.0], [40.3, 177.0], [40.4, 177.0], [40.5, 177.0], [40.6, 177.0], [40.7, 177.0], [40.8, 177.0], [40.9, 177.0], [41.0, 177.0], [41.1, 177.0], [41.2, 177.0], [41.3, 177.0], [41.4, 177.0], [41.5, 177.0], [41.6, 177.0], [41.7, 177.0], [41.8, 177.0], [41.9, 177.0], [42.0, 177.0], [42.1, 177.0], [42.2, 177.0], [42.3, 177.0], [42.4, 177.0], [42.5, 177.0], [42.6, 177.0], [42.7, 177.0], [42.8, 178.0], [42.9, 178.0], [43.0, 178.0], [43.1, 178.0], [43.2, 178.0], [43.3, 178.0], [43.4, 178.0], [43.5, 178.0], [43.6, 178.0], [43.7, 178.0], [43.8, 178.0], [43.9, 178.0], [44.0, 178.0], [44.1, 178.0], [44.2, 178.0], [44.3, 178.0], [44.4, 178.0], [44.5, 178.0], [44.6, 178.0], [44.7, 178.0], [44.8, 178.0], [44.9, 178.0], [45.0, 178.0], [45.1, 178.0], [45.2, 178.0], [45.3, 178.0], [45.4, 178.0], [45.5, 178.0], [45.6, 178.0], [45.7, 178.0], [45.8, 178.0], [45.9, 178.0], [46.0, 178.0], [46.1, 178.0], [46.2, 178.0], [46.3, 178.0], [46.4, 178.0], [46.5, 178.0], [46.6, 178.0], [46.7, 178.0], [46.8, 178.0], [46.9, 178.0], [47.0, 178.0], [47.1, 178.0], [47.2, 178.0], [47.3, 178.0], [47.4, 178.0], [47.5, 178.0], [47.6, 178.0], [47.7, 179.0], [47.8, 179.0], [47.9, 179.0], [48.0, 179.0], [48.1, 179.0], [48.2, 179.0], [48.3, 179.0], [48.4, 179.0], [48.5, 179.0], [48.6, 179.0], [48.7, 179.0], [48.8, 179.0], [48.9, 179.0], [49.0, 179.0], [49.1, 179.0], [49.2, 179.0], [49.3, 179.0], [49.4, 179.0], [49.5, 179.0], [49.6, 179.0], [49.7, 179.0], [49.8, 179.0], [49.9, 179.0], [50.0, 179.0], [50.1, 179.0], [50.2, 179.0], [50.3, 179.0], [50.4, 179.0], [50.5, 179.0], [50.6, 179.0], [50.7, 179.0], [50.8, 179.0], [50.9, 179.0], [51.0, 179.0], [51.1, 179.0], [51.2, 179.0], [51.3, 179.0], [51.4, 179.0], [51.5, 179.0], [51.6, 179.0], [51.7, 179.0], [51.8, 179.0], [51.9, 179.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 179.0], [52.4, 179.0], [52.5, 180.0], [52.6, 180.0], [52.7, 180.0], [52.8, 180.0], [52.9, 180.0], [53.0, 180.0], [53.1, 180.0], [53.2, 180.0], [53.3, 180.0], [53.4, 180.0], [53.5, 180.0], [53.6, 180.0], [53.7, 180.0], [53.8, 180.0], [53.9, 180.0], [54.0, 180.0], [54.1, 180.0], [54.2, 180.0], [54.3, 180.0], [54.4, 180.0], [54.5, 180.0], [54.6, 180.0], [54.7, 180.0], [54.8, 180.0], [54.9, 180.0], [55.0, 180.0], [55.1, 180.0], [55.2, 180.0], [55.3, 180.0], [55.4, 180.0], [55.5, 180.0], [55.6, 180.0], [55.7, 180.0], [55.8, 180.0], [55.9, 180.0], [56.0, 180.0], [56.1, 180.0], [56.2, 180.0], [56.3, 180.0], [56.4, 180.0], [56.5, 180.0], [56.6, 180.0], [56.7, 180.0], [56.8, 181.0], [56.9, 181.0], [57.0, 181.0], [57.1, 181.0], [57.2, 181.0], [57.3, 181.0], [57.4, 181.0], [57.5, 181.0], [57.6, 181.0], [57.7, 181.0], [57.8, 181.0], [57.9, 181.0], [58.0, 181.0], [58.1, 181.0], [58.2, 181.0], [58.3, 181.0], [58.4, 181.0], [58.5, 181.0], [58.6, 181.0], [58.7, 181.0], [58.8, 181.0], [58.9, 181.0], [59.0, 181.0], [59.1, 181.0], [59.2, 181.0], [59.3, 181.0], [59.4, 181.0], [59.5, 181.0], [59.6, 181.0], [59.7, 181.0], [59.8, 181.0], [59.9, 181.0], [60.0, 181.0], [60.1, 181.0], [60.2, 181.0], [60.3, 181.0], [60.4, 181.0], [60.5, 181.0], [60.6, 182.0], [60.7, 182.0], [60.8, 182.0], [60.9, 182.0], [61.0, 182.0], [61.1, 182.0], [61.2, 182.0], [61.3, 182.0], [61.4, 182.0], [61.5, 182.0], [61.6, 182.0], [61.7, 182.0], [61.8, 182.0], [61.9, 182.0], [62.0, 182.0], [62.1, 182.0], [62.2, 182.0], [62.3, 182.0], [62.4, 182.0], [62.5, 182.0], [62.6, 182.0], [62.7, 182.0], [62.8, 182.0], [62.9, 182.0], [63.0, 182.0], [63.1, 182.0], [63.2, 182.0], [63.3, 182.0], [63.4, 182.0], [63.5, 182.0], [63.6, 182.0], [63.7, 182.0], [63.8, 182.0], [63.9, 182.0], [64.0, 182.0], [64.1, 182.0], [64.2, 182.0], [64.3, 183.0], [64.4, 183.0], [64.5, 183.0], [64.6, 183.0], [64.7, 183.0], [64.8, 183.0], [64.9, 183.0], [65.0, 183.0], [65.1, 183.0], [65.2, 183.0], [65.3, 183.0], [65.4, 183.0], [65.5, 183.0], [65.6, 183.0], [65.7, 183.0], [65.8, 183.0], [65.9, 183.0], [66.0, 183.0], [66.1, 183.0], [66.2, 183.0], [66.3, 183.0], [66.4, 183.0], [66.5, 183.0], [66.6, 183.0], [66.7, 183.0], [66.8, 183.0], [66.9, 183.0], [67.0, 183.0], [67.1, 183.0], [67.2, 183.0], [67.3, 183.0], [67.4, 183.0], [67.5, 183.0], [67.6, 184.0], [67.7, 184.0], [67.8, 184.0], [67.9, 184.0], [68.0, 184.0], [68.1, 184.0], [68.2, 184.0], [68.3, 184.0], [68.4, 184.0], [68.5, 184.0], [68.6, 184.0], [68.7, 184.0], [68.8, 184.0], [68.9, 184.0], [69.0, 184.0], [69.1, 184.0], [69.2, 184.0], [69.3, 184.0], [69.4, 184.0], [69.5, 184.0], [69.6, 184.0], [69.7, 184.0], [69.8, 184.0], [69.9, 184.0], [70.0, 184.0], [70.1, 184.0], [70.2, 184.0], [70.3, 184.0], [70.4, 184.0], [70.5, 184.0], [70.6, 184.0], [70.7, 184.0], [70.8, 184.0], [70.9, 184.0], [71.0, 184.0], [71.1, 184.0], [71.2, 185.0], [71.3, 185.0], [71.4, 185.0], [71.5, 185.0], [71.6, 185.0], [71.7, 185.0], [71.8, 185.0], [71.9, 185.0], [72.0, 185.0], [72.1, 185.0], [72.2, 185.0], [72.3, 185.0], [72.4, 185.0], [72.5, 185.0], [72.6, 185.0], [72.7, 185.0], [72.8, 185.0], [72.9, 185.0], [73.0, 185.0], [73.1, 185.0], [73.2, 185.0], [73.3, 185.0], [73.4, 185.0], [73.5, 185.0], [73.6, 185.0], [73.7, 185.0], [73.8, 185.0], [73.9, 185.0], [74.0, 185.0], [74.1, 185.0], [74.2, 185.0], [74.3, 186.0], [74.4, 186.0], [74.5, 186.0], [74.6, 186.0], [74.7, 186.0], [74.8, 186.0], [74.9, 186.0], [75.0, 186.0], [75.1, 186.0], [75.2, 186.0], [75.3, 186.0], [75.4, 186.0], [75.5, 186.0], [75.6, 186.0], [75.7, 186.0], [75.8, 186.0], [75.9, 186.0], [76.0, 186.0], [76.1, 186.0], [76.2, 186.0], [76.3, 186.0], [76.4, 186.0], [76.5, 186.0], [76.6, 187.0], [76.7, 187.0], [76.8, 187.0], [76.9, 187.0], [77.0, 187.0], [77.1, 187.0], [77.2, 187.0], [77.3, 187.0], [77.4, 187.0], [77.5, 187.0], [77.6, 187.0], [77.7, 187.0], [77.8, 187.0], [77.9, 187.0], [78.0, 187.0], [78.1, 187.0], [78.2, 187.0], [78.3, 187.0], [78.4, 187.0], [78.5, 187.0], [78.6, 187.0], [78.7, 187.0], [78.8, 187.0], [78.9, 188.0], [79.0, 188.0], [79.1, 188.0], [79.2, 188.0], [79.3, 188.0], [79.4, 188.0], [79.5, 188.0], [79.6, 188.0], [79.7, 188.0], [79.8, 188.0], [79.9, 188.0], [80.0, 188.0], [80.1, 188.0], [80.2, 188.0], [80.3, 188.0], [80.4, 188.0], [80.5, 188.0], [80.6, 188.0], [80.7, 188.0], [80.8, 189.0], [80.9, 189.0], [81.0, 189.0], [81.1, 189.0], [81.2, 189.0], [81.3, 189.0], [81.4, 189.0], [81.5, 189.0], [81.6, 189.0], [81.7, 189.0], [81.8, 189.0], [81.9, 189.0], [82.0, 189.0], [82.1, 189.0], [82.2, 190.0], [82.3, 190.0], [82.4, 190.0], [82.5, 190.0], [82.6, 190.0], [82.7, 190.0], [82.8, 190.0], [82.9, 190.0], [83.0, 190.0], [83.1, 190.0], [83.2, 190.0], [83.3, 190.0], [83.4, 190.0], [83.5, 190.0], [83.6, 191.0], [83.7, 191.0], [83.8, 191.0], [83.9, 191.0], [84.0, 191.0], [84.1, 191.0], [84.2, 191.0], [84.3, 192.0], [84.4, 192.0], [84.5, 192.0], [84.6, 192.0], [84.7, 192.0], [84.8, 192.0], [84.9, 193.0], [85.0, 193.0], [85.1, 193.0], [85.2, 193.0], [85.3, 193.0], [85.4, 193.0], [85.5, 193.0], [85.6, 194.0], [85.7, 194.0], [85.8, 194.0], [85.9, 194.0], [86.0, 194.0], [86.1, 195.0], [86.2, 195.0], [86.3, 195.0], [86.4, 196.0], [86.5, 196.0], [86.6, 196.0], [86.7, 196.0], [86.8, 196.0], [86.9, 197.0], [87.0, 197.0], [87.1, 197.0], [87.2, 197.0], [87.3, 198.0], [87.4, 199.0], [87.5, 199.0], [87.6, 200.0], [87.7, 200.0], [87.8, 200.0], [87.9, 201.0], [88.0, 201.0], [88.1, 202.0], [88.2, 203.0], [88.3, 203.0], [88.4, 203.0], [88.5, 204.0], [88.6, 204.0], [88.7, 205.0], [88.8, 206.0], [88.9, 206.0], [89.0, 207.0], [89.1, 207.0], [89.2, 208.0], [89.3, 209.0], [89.4, 209.0], [89.5, 210.0], [89.6, 210.0], [89.7, 211.0], [89.8, 211.0], [89.9, 211.0], [90.0, 212.0], [90.1, 213.0], [90.2, 213.0], [90.3, 213.0], [90.4, 214.0], [90.5, 216.0], [90.6, 216.0], [90.7, 217.0], [90.8, 217.0], [90.9, 218.0], [91.0, 219.0], [91.1, 221.0], [91.2, 222.0], [91.3, 226.0], [91.4, 227.0], [91.5, 228.0], [91.6, 229.0], [91.7, 231.0], [91.8, 232.0], [91.9, 238.0], [92.0, 239.0], [92.1, 245.0], [92.2, 247.0], [92.3, 254.0], [92.4, 261.0], [92.5, 263.0], [92.6, 264.0], [92.7, 267.0], [92.8, 269.0], [92.9, 271.0], [93.0, 277.0], [93.1, 280.0], [93.2, 283.0], [93.3, 288.0], [93.4, 293.0], [93.5, 294.0], [93.6, 297.0], [93.7, 301.0], [93.8, 306.0], [93.9, 308.0], [94.0, 319.0], [94.1, 323.0], [94.2, 329.0], [94.3, 335.0], [94.4, 350.0], [94.5, 352.0], [94.6, 362.0], [94.7, 375.0], [94.8, 390.0], [94.9, 408.0], [95.0, 425.0], [95.1, 432.0], [95.2, 438.0], [95.3, 446.0], [95.4, 450.0], [95.5, 454.0], [95.6, 459.0], [95.7, 461.0], [95.8, 462.0], [95.9, 471.0], [96.0, 474.0], [96.1, 477.0], [96.2, 480.0], [96.3, 486.0], [96.4, 490.0], [96.5, 496.0], [96.6, 500.0], [96.7, 504.0], [96.8, 511.0], [96.9, 514.0], [97.0, 533.0], [97.1, 558.0], [97.2, 582.0], [97.3, 606.0], [97.4, 618.0], [97.5, 634.0], [97.6, 655.0], [97.7, 673.0], [97.8, 713.0], [97.9, 744.0], [98.0, 759.0], [98.1, 778.0], [98.2, 790.0], [98.3, 799.0], [98.4, 825.0], [98.5, 850.0], [98.6, 880.0], [98.7, 922.0], [98.8, 946.0], [98.9, 971.0], [99.0, 1037.0], [99.1, 1073.0], [99.2, 1107.0], [99.3, 1178.0], [99.4, 1185.0], [99.5, 1200.0], [99.6, 1282.0], [99.7, 1548.0], [99.8, 1998.0], [99.9, 2052.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 3065.0, "series": [{"data": [[2100.0, 3.0], [600.0, 18.0], [700.0, 19.0], [200.0, 213.0], [800.0, 11.0], [900.0, 12.0], [1000.0, 6.0], [1100.0, 12.0], [300.0, 43.0], [1200.0, 6.0], [1400.0, 1.0], [1500.0, 1.0], [400.0, 60.0], [1600.0, 1.0], [100.0, 3065.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 3.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3382.0, "series": [{"data": [[0.0, 3382.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 107.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0160642570281135, "minX": 1.72860066E12, "maxY": 3.1818181818181817, "series": [{"data": [[1.72860066E12, 2.594758064516128], [1.72860096E12, 2.0698602794411154], [1.72860102E12, 3.1569416498993976], [1.72860084E12, 2.046184738955821], [1.7286009E12, 2.058116232464928], [1.72860072E12, 2.101999999999999], [1.72860078E12, 2.0160642570281135], [1.72860108E12, 3.1818181818181817]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860108E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 183.56601909779405, "minX": 1.0, "maxY": 2126.0, "series": [{"data": [[8.0, 911.0], [2.0, 183.56601909779405], [9.0, 1173.5], [10.0, 2126.0], [11.0, 1927.0], [12.0, 1104.0], [3.0, 285.64853556485355], [13.0, 2123.0], [14.0, 682.0], [15.0, 873.0], [16.0, 1042.0], [4.0, 465.00000000000006], [1.0, 195.47058823529412], [17.0, 479.0], [19.0, 1658.0], [20.0, 462.0], [5.0, 550.3749999999998], [21.0, 1548.0], [22.0, 2033.0], [23.0, 1999.0], [6.0, 451.3939393939393], [7.0, 369.157894736842]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.294000000000007, 212.83857142857184]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 23.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.0, "minX": 1.72860066E12, "maxY": 563874.9333333333, "series": [{"data": [[1.72860066E12, 558230.7666666667], [1.72860096E12, 563874.9333333333], [1.72860102E12, 559373.2], [1.72860084E12, 560497.5833333334], [1.7286009E12, 561623.4], [1.72860072E12, 562738.6666666666], [1.72860078E12, 560496.4], [1.72860108E12, 12380.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72860066E12, 992.0], [1.72860096E12, 1002.0], [1.72860102E12, 994.0], [1.72860084E12, 996.0], [1.7286009E12, 998.0], [1.72860072E12, 1000.0], [1.72860078E12, 996.0], [1.72860108E12, 22.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860108E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 182.12248995983927, "minX": 1.72860066E12, "maxY": 542.818181818182, "series": [{"data": [[1.72860066E12, 243.7963709677419], [1.72860096E12, 184.92614770459082], [1.72860102E12, 311.3058350100603], [1.72860084E12, 184.36546184738967], [1.7286009E12, 186.69939879759508], [1.72860072E12, 190.00000000000014], [1.72860078E12, 182.12248995983927], [1.72860108E12, 542.818181818182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860108E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 138.96987951807225, "minX": 1.72860066E12, "maxY": 437.09090909090907, "series": [{"data": [[1.72860066E12, 194.07862903225808], [1.72860096E12, 140.3213572854292], [1.72860102E12, 248.98993963782698], [1.72860084E12, 142.27108433734938], [1.7286009E12, 142.90180360721428], [1.72860072E12, 146.8559999999999], [1.72860078E12, 138.96987951807225], [1.72860108E12, 437.09090909090907]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860108E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 91.30738522954083, "minX": 1.72860066E12, "maxY": 377.6363636363636, "series": [{"data": [[1.72860066E12, 137.19354838709674], [1.72860096E12, 91.30738522954083], [1.72860102E12, 195.0764587525151], [1.72860084E12, 93.42971887550199], [1.7286009E12, 93.7935871743487], [1.72860072E12, 98.08799999999997], [1.72860078E12, 91.40361445783122], [1.72860108E12, 377.6363636363636]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860108E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 156.0, "minX": 1.72860066E12, "maxY": 2142.0, "series": [{"data": [[1.72860066E12, 2142.0], [1.72860096E12, 1181.0], [1.72860102E12, 1407.0], [1.72860084E12, 1209.0], [1.7286009E12, 1188.0], [1.72860072E12, 1200.0], [1.72860078E12, 501.0], [1.72860108E12, 1185.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72860066E12, 218.0], [1.72860096E12, 191.0], [1.72860102E12, 705.8], [1.72860084E12, 190.0], [1.7286009E12, 190.0], [1.72860072E12, 193.0], [1.72860078E12, 188.0], [1.72860108E12, 1160.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72860066E12, 2033.5699999999995], [1.72860096E12, 475.9200000000001], [1.72860102E12, 1179.5999999999985], [1.72860084E12, 432.03], [1.7286009E12, 480.0], [1.72860072E12, 495.97], [1.72860078E12, 238.26999999999975], [1.72860108E12, 1185.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72860066E12, 477.29999999999995], [1.72860096E12, 210.0], [1.72860102E12, 855.5999999999998], [1.72860084E12, 199.14999999999986], [1.7286009E12, 207.0], [1.72860072E12, 207.95], [1.72860078E12, 196.0], [1.72860108E12, 1185.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72860066E12, 162.0], [1.72860096E12, 158.0], [1.72860102E12, 157.0], [1.72860084E12, 159.0], [1.7286009E12, 156.0], [1.72860072E12, 157.0], [1.72860078E12, 161.0], [1.72860108E12, 209.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72860066E12, 180.0], [1.72860096E12, 176.0], [1.72860102E12, 184.0], [1.72860084E12, 179.0], [1.7286009E12, 179.0], [1.72860072E12, 179.5], [1.72860078E12, 179.0], [1.72860108E12, 330.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 178.0, "minX": 4.0, "maxY": 1548.0, "series": [{"data": [[8.0, 178.0], [4.0, 181.0], [17.0, 390.0], [9.0, 179.0], [10.0, 223.5], [5.0, 450.0], [11.0, 303.5], [6.0, 188.5], [12.0, 420.5], [13.0, 1548.0], [7.0, 182.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 136.0, "minX": 4.0, "maxY": 1405.0, "series": [{"data": [[8.0, 136.0], [4.0, 139.0], [17.0, 319.0], [9.0, 136.0], [10.0, 176.5], [5.0, 370.0], [11.0, 254.5], [6.0, 144.0], [12.0, 348.5], [13.0, 1405.0], [7.0, 140.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.72860066E12, "maxY": 8.35, "series": [{"data": [[1.72860066E12, 8.316666666666666], [1.72860096E12, 8.333333333333334], [1.72860102E12, 8.35], [1.72860084E12, 8.3], [1.7286009E12, 8.333333333333334], [1.72860072E12, 8.316666666666666], [1.72860078E12, 8.283333333333333], [1.72860108E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.72860066E12, "maxY": 8.35, "series": [{"data": [[1.72860066E12, 8.266666666666667], [1.72860096E12, 8.35], [1.72860102E12, 8.283333333333333], [1.72860084E12, 8.3], [1.7286009E12, 8.316666666666666], [1.72860072E12, 8.333333333333334], [1.72860078E12, 8.3], [1.72860108E12, 0.18333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72860108E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.72860066E12, "maxY": 8.35, "series": [{"data": [[1.72860066E12, 8.266666666666667], [1.72860096E12, 8.35], [1.72860102E12, 8.283333333333333], [1.72860084E12, 8.3], [1.7286009E12, 8.316666666666666], [1.72860072E12, 8.333333333333334], [1.72860078E12, 8.3], [1.72860108E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860108E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.72860066E12, "maxY": 8.35, "series": [{"data": [[1.72860066E12, 8.266666666666667], [1.72860096E12, 8.35], [1.72860102E12, 8.283333333333333], [1.72860084E12, 8.3], [1.7286009E12, 8.316666666666666], [1.72860072E12, 8.333333333333334], [1.72860078E12, 8.3], [1.72860108E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72860108E12, "title": "Total Transactions Per Second"}},
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

