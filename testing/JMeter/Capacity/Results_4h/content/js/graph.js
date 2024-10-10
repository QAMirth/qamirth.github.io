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
        data: {"result": {"minY": 160.0, "minX": 0.0, "maxY": 1205.0, "series": [{"data": [[0.0, 160.0], [0.1, 160.0], [0.2, 160.0], [0.3, 160.0], [0.4, 160.0], [0.5, 160.0], [0.6, 161.0], [0.7, 161.0], [0.8, 161.0], [0.9, 161.0], [1.0, 162.0], [1.1, 162.0], [1.2, 162.0], [1.3, 162.0], [1.4, 162.0], [1.5, 162.0], [1.6, 162.0], [1.7, 162.0], [1.8, 163.0], [1.9, 163.0], [2.0, 163.0], [2.1, 163.0], [2.2, 163.0], [2.3, 163.0], [2.4, 164.0], [2.5, 164.0], [2.6, 164.0], [2.7, 164.0], [2.8, 164.0], [2.9, 164.0], [3.0, 164.0], [3.1, 164.0], [3.2, 164.0], [3.3, 164.0], [3.4, 164.0], [3.5, 164.0], [3.6, 164.0], [3.7, 164.0], [3.8, 165.0], [3.9, 165.0], [4.0, 165.0], [4.1, 165.0], [4.2, 165.0], [4.3, 165.0], [4.4, 165.0], [4.5, 165.0], [4.6, 165.0], [4.7, 165.0], [4.8, 165.0], [4.9, 165.0], [5.0, 165.0], [5.1, 165.0], [5.2, 165.0], [5.3, 165.0], [5.4, 165.0], [5.5, 165.0], [5.6, 166.0], [5.7, 166.0], [5.8, 166.0], [5.9, 166.0], [6.0, 166.0], [6.1, 166.0], [6.2, 166.0], [6.3, 166.0], [6.4, 166.0], [6.5, 166.0], [6.6, 166.0], [6.7, 166.0], [6.8, 166.0], [6.9, 166.0], [7.0, 166.0], [7.1, 166.0], [7.2, 166.0], [7.3, 166.0], [7.4, 166.0], [7.5, 166.0], [7.6, 167.0], [7.7, 167.0], [7.8, 167.0], [7.9, 167.0], [8.0, 167.0], [8.1, 167.0], [8.2, 167.0], [8.3, 167.0], [8.4, 167.0], [8.5, 167.0], [8.6, 167.0], [8.7, 167.0], [8.8, 167.0], [8.9, 167.0], [9.0, 167.0], [9.1, 167.0], [9.2, 167.0], [9.3, 167.0], [9.4, 167.0], [9.5, 167.0], [9.6, 167.0], [9.7, 167.0], [9.8, 168.0], [9.9, 168.0], [10.0, 168.0], [10.1, 168.0], [10.2, 168.0], [10.3, 168.0], [10.4, 168.0], [10.5, 168.0], [10.6, 168.0], [10.7, 168.0], [10.8, 168.0], [10.9, 168.0], [11.0, 168.0], [11.1, 168.0], [11.2, 168.0], [11.3, 168.0], [11.4, 168.0], [11.5, 168.0], [11.6, 168.0], [11.7, 168.0], [11.8, 168.0], [11.9, 168.0], [12.0, 168.0], [12.1, 168.0], [12.2, 168.0], [12.3, 168.0], [12.4, 168.0], [12.5, 168.0], [12.6, 168.0], [12.7, 169.0], [12.8, 169.0], [12.9, 169.0], [13.0, 169.0], [13.1, 169.0], [13.2, 169.0], [13.3, 169.0], [13.4, 169.0], [13.5, 169.0], [13.6, 169.0], [13.7, 169.0], [13.8, 169.0], [13.9, 169.0], [14.0, 169.0], [14.1, 169.0], [14.2, 169.0], [14.3, 169.0], [14.4, 169.0], [14.5, 169.0], [14.6, 169.0], [14.7, 169.0], [14.8, 169.0], [14.9, 169.0], [15.0, 169.0], [15.1, 169.0], [15.2, 169.0], [15.3, 169.0], [15.4, 169.0], [15.5, 169.0], [15.6, 169.0], [15.7, 169.0], [15.8, 169.0], [15.9, 169.0], [16.0, 169.0], [16.1, 169.0], [16.2, 169.0], [16.3, 169.0], [16.4, 169.0], [16.5, 169.0], [16.6, 169.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 169.0], [17.1, 169.0], [17.2, 169.0], [17.3, 170.0], [17.4, 170.0], [17.5, 170.0], [17.6, 170.0], [17.7, 170.0], [17.8, 170.0], [17.9, 170.0], [18.0, 170.0], [18.1, 170.0], [18.2, 170.0], [18.3, 170.0], [18.4, 170.0], [18.5, 170.0], [18.6, 170.0], [18.7, 170.0], [18.8, 170.0], [18.9, 170.0], [19.0, 170.0], [19.1, 170.0], [19.2, 170.0], [19.3, 170.0], [19.4, 170.0], [19.5, 170.0], [19.6, 170.0], [19.7, 170.0], [19.8, 170.0], [19.9, 170.0], [20.0, 170.0], [20.1, 170.0], [20.2, 170.0], [20.3, 170.0], [20.4, 170.0], [20.5, 170.0], [20.6, 170.0], [20.7, 170.0], [20.8, 170.0], [20.9, 170.0], [21.0, 170.0], [21.1, 170.0], [21.2, 170.0], [21.3, 170.0], [21.4, 170.0], [21.5, 171.0], [21.6, 171.0], [21.7, 171.0], [21.8, 171.0], [21.9, 171.0], [22.0, 171.0], [22.1, 171.0], [22.2, 171.0], [22.3, 171.0], [22.4, 171.0], [22.5, 171.0], [22.6, 171.0], [22.7, 171.0], [22.8, 171.0], [22.9, 171.0], [23.0, 171.0], [23.1, 171.0], [23.2, 171.0], [23.3, 171.0], [23.4, 171.0], [23.5, 171.0], [23.6, 171.0], [23.7, 171.0], [23.8, 171.0], [23.9, 171.0], [24.0, 171.0], [24.1, 171.0], [24.2, 171.0], [24.3, 171.0], [24.4, 171.0], [24.5, 171.0], [24.6, 172.0], [24.7, 172.0], [24.8, 172.0], [24.9, 172.0], [25.0, 172.0], [25.1, 172.0], [25.2, 172.0], [25.3, 172.0], [25.4, 172.0], [25.5, 172.0], [25.6, 172.0], [25.7, 172.0], [25.8, 172.0], [25.9, 172.0], [26.0, 172.0], [26.1, 172.0], [26.2, 172.0], [26.3, 172.0], [26.4, 172.0], [26.5, 172.0], [26.6, 172.0], [26.7, 172.0], [26.8, 172.0], [26.9, 172.0], [27.0, 172.0], [27.1, 172.0], [27.2, 172.0], [27.3, 172.0], [27.4, 172.0], [27.5, 172.0], [27.6, 172.0], [27.7, 172.0], [27.8, 172.0], [27.9, 172.0], [28.0, 172.0], [28.1, 172.0], [28.2, 172.0], [28.3, 172.0], [28.4, 172.0], [28.5, 172.0], [28.6, 172.0], [28.7, 172.0], [28.8, 173.0], [28.9, 173.0], [29.0, 173.0], [29.1, 173.0], [29.2, 173.0], [29.3, 173.0], [29.4, 173.0], [29.5, 173.0], [29.6, 173.0], [29.7, 173.0], [29.8, 173.0], [29.9, 173.0], [30.0, 173.0], [30.1, 173.0], [30.2, 173.0], [30.3, 173.0], [30.4, 173.0], [30.5, 173.0], [30.6, 173.0], [30.7, 173.0], [30.8, 173.0], [30.9, 173.0], [31.0, 173.0], [31.1, 173.0], [31.2, 173.0], [31.3, 173.0], [31.4, 173.0], [31.5, 173.0], [31.6, 173.0], [31.7, 173.0], [31.8, 173.0], [31.9, 173.0], [32.0, 173.0], [32.1, 173.0], [32.2, 173.0], [32.3, 173.0], [32.4, 173.0], [32.5, 173.0], [32.6, 174.0], [32.7, 174.0], [32.8, 174.0], [32.9, 174.0], [33.0, 174.0], [33.1, 174.0], [33.2, 174.0], [33.3, 174.0], [33.4, 174.0], [33.5, 174.0], [33.6, 174.0], [33.7, 174.0], [33.8, 174.0], [33.9, 174.0], [34.0, 174.0], [34.1, 174.0], [34.2, 174.0], [34.3, 174.0], [34.4, 174.0], [34.5, 174.0], [34.6, 174.0], [34.7, 174.0], [34.8, 174.0], [34.9, 174.0], [35.0, 174.0], [35.1, 174.0], [35.2, 174.0], [35.3, 174.0], [35.4, 175.0], [35.5, 175.0], [35.6, 175.0], [35.7, 175.0], [35.8, 175.0], [35.9, 175.0], [36.0, 175.0], [36.1, 175.0], [36.2, 175.0], [36.3, 175.0], [36.4, 175.0], [36.5, 175.0], [36.6, 175.0], [36.7, 175.0], [36.8, 175.0], [36.9, 175.0], [37.0, 175.0], [37.1, 175.0], [37.2, 175.0], [37.3, 175.0], [37.4, 175.0], [37.5, 175.0], [37.6, 175.0], [37.7, 175.0], [37.8, 175.0], [37.9, 175.0], [38.0, 175.0], [38.1, 175.0], [38.2, 176.0], [38.3, 176.0], [38.4, 176.0], [38.5, 176.0], [38.6, 176.0], [38.7, 176.0], [38.8, 176.0], [38.9, 176.0], [39.0, 176.0], [39.1, 176.0], [39.2, 176.0], [39.3, 176.0], [39.4, 176.0], [39.5, 176.0], [39.6, 176.0], [39.7, 176.0], [39.8, 176.0], [39.9, 176.0], [40.0, 176.0], [40.1, 176.0], [40.2, 176.0], [40.3, 176.0], [40.4, 176.0], [40.5, 176.0], [40.6, 176.0], [40.7, 176.0], [40.8, 176.0], [40.9, 176.0], [41.0, 176.0], [41.1, 176.0], [41.2, 176.0], [41.3, 176.0], [41.4, 176.0], [41.5, 176.0], [41.6, 177.0], [41.7, 177.0], [41.8, 177.0], [41.9, 177.0], [42.0, 177.0], [42.1, 177.0], [42.2, 177.0], [42.3, 177.0], [42.4, 177.0], [42.5, 177.0], [42.6, 177.0], [42.7, 177.0], [42.8, 177.0], [42.9, 177.0], [43.0, 177.0], [43.1, 177.0], [43.2, 177.0], [43.3, 177.0], [43.4, 177.0], [43.5, 177.0], [43.6, 177.0], [43.7, 177.0], [43.8, 177.0], [43.9, 177.0], [44.0, 177.0], [44.1, 177.0], [44.2, 177.0], [44.3, 177.0], [44.4, 177.0], [44.5, 177.0], [44.6, 178.0], [44.7, 178.0], [44.8, 178.0], [44.9, 178.0], [45.0, 178.0], [45.1, 178.0], [45.2, 178.0], [45.3, 178.0], [45.4, 178.0], [45.5, 178.0], [45.6, 178.0], [45.7, 178.0], [45.8, 178.0], [45.9, 178.0], [46.0, 178.0], [46.1, 178.0], [46.2, 178.0], [46.3, 178.0], [46.4, 178.0], [46.5, 178.0], [46.6, 178.0], [46.7, 178.0], [46.8, 178.0], [46.9, 178.0], [47.0, 178.0], [47.1, 178.0], [47.2, 178.0], [47.3, 178.0], [47.4, 178.0], [47.5, 178.0], [47.6, 179.0], [47.7, 179.0], [47.8, 179.0], [47.9, 179.0], [48.0, 179.0], [48.1, 179.0], [48.2, 179.0], [48.3, 179.0], [48.4, 179.0], [48.5, 179.0], [48.6, 179.0], [48.7, 179.0], [48.8, 179.0], [48.9, 179.0], [49.0, 179.0], [49.1, 179.0], [49.2, 179.0], [49.3, 179.0], [49.4, 179.0], [49.5, 179.0], [49.6, 179.0], [49.7, 179.0], [49.8, 180.0], [49.9, 180.0], [50.0, 180.0], [50.1, 180.0], [50.2, 180.0], [50.3, 180.0], [50.4, 180.0], [50.5, 180.0], [50.6, 180.0], [50.7, 180.0], [50.8, 180.0], [50.9, 180.0], [51.0, 180.0], [51.1, 180.0], [51.2, 180.0], [51.3, 180.0], [51.4, 180.0], [51.5, 180.0], [51.6, 180.0], [51.7, 180.0], [51.8, 180.0], [51.9, 180.0], [52.0, 180.0], [52.1, 180.0], [52.2, 180.0], [52.3, 180.0], [52.4, 180.0], [52.5, 180.0], [52.6, 181.0], [52.7, 181.0], [52.8, 181.0], [52.9, 181.0], [53.0, 181.0], [53.1, 181.0], [53.2, 181.0], [53.3, 181.0], [53.4, 181.0], [53.5, 181.0], [53.6, 181.0], [53.7, 181.0], [53.8, 181.0], [53.9, 181.0], [54.0, 181.0], [54.1, 181.0], [54.2, 181.0], [54.3, 181.0], [54.4, 181.0], [54.5, 181.0], [54.6, 181.0], [54.7, 181.0], [54.8, 181.0], [54.9, 181.0], [55.0, 181.0], [55.1, 181.0], [55.2, 181.0], [55.3, 181.0], [55.4, 181.0], [55.5, 181.0], [55.6, 181.0], [55.7, 181.0], [55.8, 181.0], [55.9, 181.0], [56.0, 182.0], [56.1, 182.0], [56.2, 182.0], [56.3, 182.0], [56.4, 182.0], [56.5, 182.0], [56.6, 182.0], [56.7, 182.0], [56.8, 182.0], [56.9, 182.0], [57.0, 182.0], [57.1, 182.0], [57.2, 182.0], [57.3, 182.0], [57.4, 182.0], [57.5, 182.0], [57.6, 182.0], [57.7, 182.0], [57.8, 182.0], [57.9, 182.0], [58.0, 182.0], [58.1, 182.0], [58.2, 183.0], [58.3, 183.0], [58.4, 183.0], [58.5, 183.0], [58.6, 183.0], [58.7, 183.0], [58.8, 183.0], [58.9, 183.0], [59.0, 183.0], [59.1, 183.0], [59.2, 183.0], [59.3, 183.0], [59.4, 183.0], [59.5, 183.0], [59.6, 183.0], [59.7, 183.0], [59.8, 183.0], [59.9, 183.0], [60.0, 183.0], [60.1, 183.0], [60.2, 183.0], [60.3, 183.0], [60.4, 184.0], [60.5, 184.0], [60.6, 184.0], [60.7, 184.0], [60.8, 184.0], [60.9, 184.0], [61.0, 184.0], [61.1, 184.0], [61.2, 184.0], [61.3, 184.0], [61.4, 184.0], [61.5, 184.0], [61.6, 184.0], [61.7, 184.0], [61.8, 184.0], [61.9, 184.0], [62.0, 184.0], [62.1, 184.0], [62.2, 184.0], [62.3, 184.0], [62.4, 184.0], [62.5, 184.0], [62.6, 184.0], [62.7, 184.0], [62.8, 184.0], [62.9, 184.0], [63.0, 184.0], [63.1, 184.0], [63.2, 185.0], [63.3, 185.0], [63.4, 185.0], [63.5, 185.0], [63.6, 185.0], [63.7, 185.0], [63.8, 185.0], [63.9, 185.0], [64.0, 185.0], [64.1, 185.0], [64.2, 185.0], [64.3, 185.0], [64.4, 185.0], [64.5, 185.0], [64.6, 185.0], [64.7, 185.0], [64.8, 185.0], [64.9, 185.0], [65.0, 185.0], [65.1, 185.0], [65.2, 185.0], [65.3, 185.0], [65.4, 185.0], [65.5, 185.0], [65.6, 185.0], [65.7, 185.0], [65.8, 186.0], [65.9, 186.0], [66.0, 186.0], [66.1, 186.0], [66.2, 186.0], [66.3, 186.0], [66.4, 186.0], [66.5, 186.0], [66.6, 186.0], [66.7, 186.0], [66.8, 186.0], [66.9, 186.0], [67.0, 186.0], [67.1, 186.0], [67.2, 186.0], [67.3, 186.0], [67.4, 186.0], [67.5, 186.0], [67.6, 186.0], [67.7, 186.0], [67.8, 186.0], [67.9, 186.0], [68.0, 187.0], [68.1, 187.0], [68.2, 187.0], [68.3, 187.0], [68.4, 187.0], [68.5, 187.0], [68.6, 187.0], [68.7, 187.0], [68.8, 187.0], [68.9, 187.0], [69.0, 187.0], [69.1, 187.0], [69.2, 187.0], [69.3, 187.0], [69.4, 187.0], [69.5, 187.0], [69.6, 187.0], [69.7, 187.0], [69.8, 187.0], [69.9, 187.0], [70.0, 188.0], [70.1, 188.0], [70.2, 188.0], [70.3, 188.0], [70.4, 188.0], [70.5, 188.0], [70.6, 188.0], [70.7, 188.0], [70.8, 188.0], [70.9, 188.0], [71.0, 188.0], [71.1, 188.0], [71.2, 188.0], [71.3, 188.0], [71.4, 189.0], [71.5, 189.0], [71.6, 189.0], [71.7, 189.0], [71.8, 189.0], [71.9, 189.0], [72.0, 189.0], [72.1, 189.0], [72.2, 189.0], [72.3, 189.0], [72.4, 189.0], [72.5, 189.0], [72.6, 189.0], [72.7, 189.0], [72.8, 189.0], [72.9, 189.0], [73.0, 189.0], [73.1, 189.0], [73.2, 190.0], [73.3, 190.0], [73.4, 190.0], [73.5, 190.0], [73.6, 190.0], [73.7, 190.0], [73.8, 190.0], [73.9, 190.0], [74.0, 190.0], [74.1, 190.0], [74.2, 190.0], [74.3, 190.0], [74.4, 190.0], [74.5, 190.0], [74.6, 190.0], [74.7, 190.0], [74.8, 190.0], [74.9, 190.0], [75.0, 190.0], [75.1, 190.0], [75.2, 191.0], [75.3, 191.0], [75.4, 191.0], [75.5, 191.0], [75.6, 191.0], [75.7, 191.0], [75.8, 191.0], [75.9, 191.0], [76.0, 191.0], [76.1, 191.0], [76.2, 191.0], [76.3, 191.0], [76.4, 191.0], [76.5, 191.0], [76.6, 191.0], [76.7, 191.0], [76.8, 191.0], [76.9, 191.0], [77.0, 192.0], [77.1, 192.0], [77.2, 192.0], [77.3, 192.0], [77.4, 192.0], [77.5, 192.0], [77.6, 192.0], [77.7, 192.0], [77.8, 192.0], [77.9, 192.0], [78.0, 192.0], [78.1, 192.0], [78.2, 193.0], [78.3, 193.0], [78.4, 193.0], [78.5, 193.0], [78.6, 193.0], [78.7, 193.0], [78.8, 193.0], [78.9, 193.0], [79.0, 193.0], [79.1, 193.0], [79.2, 193.0], [79.3, 193.0], [79.4, 194.0], [79.5, 194.0], [79.6, 194.0], [79.7, 194.0], [79.8, 194.0], [79.9, 194.0], [80.0, 194.0], [80.1, 194.0], [80.2, 194.0], [80.3, 194.0], [80.4, 194.0], [80.5, 194.0], [80.6, 194.0], [80.7, 195.0], [80.8, 195.0], [80.9, 195.0], [81.0, 195.0], [81.1, 195.0], [81.2, 195.0], [81.3, 195.0], [81.4, 195.0], [81.5, 195.0], [81.6, 195.0], [81.7, 195.0], [81.8, 195.0], [81.9, 195.0], [82.0, 195.0], [82.1, 195.0], [82.2, 196.0], [82.3, 196.0], [82.4, 196.0], [82.5, 196.0], [82.6, 196.0], [82.7, 196.0], [82.8, 196.0], [82.9, 196.0], [83.0, 196.0], [83.1, 196.0], [83.2, 196.0], [83.3, 196.0], [83.4, 196.0], [83.5, 196.0], [83.6, 196.0], [83.7, 196.0], [83.8, 196.0], [83.9, 196.0], [84.0, 197.0], [84.1, 197.0], [84.2, 197.0], [84.3, 197.0], [84.4, 197.0], [84.5, 197.0], [84.6, 198.0], [84.7, 198.0], [84.8, 198.0], [84.9, 198.0], [85.0, 198.0], [85.1, 198.0], [85.2, 199.0], [85.3, 199.0], [85.4, 199.0], [85.5, 199.0], [85.6, 199.0], [85.7, 199.0], [85.8, 200.0], [85.9, 200.0], [86.0, 200.0], [86.1, 200.0], [86.2, 200.0], [86.3, 200.0], [86.4, 201.0], [86.5, 201.0], [86.6, 201.0], [86.7, 201.0], [86.8, 201.0], [86.9, 201.0], [87.0, 201.0], [87.1, 201.0], [87.2, 202.0], [87.3, 202.0], [87.4, 202.0], [87.5, 202.0], [87.6, 202.0], [87.7, 202.0], [87.8, 202.0], [87.9, 202.0], [88.0, 203.0], [88.1, 203.0], [88.2, 203.0], [88.3, 203.0], [88.4, 203.0], [88.5, 203.0], [88.6, 203.0], [88.7, 203.0], [88.8, 203.0], [88.9, 203.0], [89.0, 205.0], [89.1, 205.0], [89.2, 205.0], [89.3, 205.0], [89.4, 205.0], [89.5, 205.0], [89.6, 206.0], [89.7, 206.0], [89.8, 206.0], [89.9, 206.0], [90.0, 206.0], [90.1, 206.0], [90.2, 208.0], [90.3, 208.0], [90.4, 208.0], [90.5, 208.0], [90.6, 208.0], [90.7, 208.0], [90.8, 208.0], [90.9, 208.0], [91.0, 209.0], [91.1, 209.0], [91.2, 209.0], [91.3, 209.0], [91.4, 210.0], [91.5, 210.0], [91.6, 211.0], [91.7, 211.0], [91.8, 212.0], [91.9, 212.0], [92.0, 213.0], [92.1, 213.0], [92.2, 213.0], [92.3, 213.0], [92.4, 213.0], [92.5, 213.0], [92.6, 213.0], [92.7, 213.0], [92.8, 214.0], [92.9, 214.0], [93.0, 214.0], [93.1, 214.0], [93.2, 214.0], [93.3, 214.0], [93.4, 214.0], [93.5, 214.0], [93.6, 216.0], [93.7, 216.0], [93.8, 218.0], [93.9, 218.0], [94.0, 219.0], [94.1, 219.0], [94.2, 219.0], [94.3, 219.0], [94.4, 220.0], [94.5, 220.0], [94.6, 220.0], [94.7, 220.0], [94.8, 222.0], [94.9, 222.0], [95.0, 223.0], [95.1, 223.0], [95.2, 227.0], [95.3, 227.0], [95.4, 230.0], [95.5, 230.0], [95.6, 230.0], [95.7, 230.0], [95.8, 240.0], [95.9, 240.0], [96.0, 241.0], [96.1, 241.0], [96.2, 241.0], [96.3, 241.0], [96.4, 260.0], [96.5, 260.0], [96.6, 260.0], [96.7, 268.0], [96.8, 268.0], [96.9, 275.0], [97.0, 275.0], [97.1, 299.0], [97.2, 299.0], [97.3, 320.0], [97.4, 320.0], [97.5, 386.0], [97.6, 386.0], [97.7, 455.0], [97.8, 455.0], [97.9, 464.0], [98.0, 464.0], [98.1, 486.0], [98.2, 486.0], [98.3, 489.0], [98.4, 489.0], [98.5, 503.0], [98.6, 503.0], [98.7, 534.0], [98.8, 534.0], [98.9, 554.0], [99.0, 554.0], [99.1, 602.0], [99.2, 602.0], [99.3, 987.0], [99.4, 987.0], [99.5, 1024.0], [99.6, 1024.0], [99.7, 1196.0], [99.8, 1196.0], [99.9, 1205.0], [100.0, 1205.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 429.0, "series": [{"data": [[1100.0, 1.0], [600.0, 1.0], [1200.0, 1.0], [300.0, 2.0], [200.0, 57.0], [100.0, 429.0], [400.0, 4.0], [900.0, 1.0], [1000.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492.0, "series": [{"data": [[0.0, 492.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.005988023952096, "minX": 1.72859166E12, "maxY": 1.4615384615384617, "series": [{"data": [[1.72859178E12, 1.005988023952096], [1.72859166E12, 1.4615384615384617], [1.72859184E12, 1.0454545454545459], [1.72859172E12, 1.0361445783132532]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72859184E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 184.45154639175243, "minX": 1.0, "maxY": 628.2727272727273, "series": [{"data": [[4.0, 241.0], [2.0, 628.2727272727273], [1.0, 184.45154639175243], [3.0, 441.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0400000000000014, 195.86800000000008]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 26.0, "minX": 1.72859166E12, "maxY": 187956.05, "series": [{"data": [[1.72859178E12, 187956.05], [1.72859166E12, 14631.283333333333], [1.72859184E12, 173323.5], [1.72859172E12, 186830.36666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72859178E12, 334.0], [1.72859166E12, 26.0], [1.72859184E12, 308.0], [1.72859172E12, 332.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72859184E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 181.44910179640715, "minX": 1.72859166E12, "maxY": 354.6153846153846, "series": [{"data": [[1.72859178E12, 181.44910179640715], [1.72859166E12, 354.6153846153846], [1.72859184E12, 192.90259740259737], [1.72859172E12, 200.69277108433732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72859184E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 136.83832335329345, "minX": 1.72859166E12, "maxY": 286.4615384615385, "series": [{"data": [[1.72859178E12, 136.83832335329345], [1.72859166E12, 286.4615384615385], [1.72859184E12, 148.99999999999997], [1.72859172E12, 156.04819277108427]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72859184E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 91.11976047904191, "minX": 1.72859166E12, "maxY": 230.76923076923075, "series": [{"data": [[1.72859178E12, 91.11976047904191], [1.72859166E12, 230.76923076923075], [1.72859184E12, 97.29870129870127], [1.72859172E12, 107.4638554216868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72859184E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.72859166E12, "maxY": 1205.0, "series": [{"data": [[1.72859178E12, 386.0], [1.72859166E12, 1024.0], [1.72859184E12, 1196.0], [1.72859172E12, 1205.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72859178E12, 199.80000000000007], [1.72859166E12, 1009.2], [1.72859184E12, 209.5], [1.72859172E12, 202.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72859178E12, 341.11999999999955], [1.72859166E12, 1024.0], [1.72859184E12, 831.8999999999925], [1.72859172E12, 768.8300000000081]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72859178E12, 217.2], [1.72859166E12, 1024.0], [1.72859184E12, 239.5], [1.72859172E12, 221.95000000000002]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72859178E12, 161.0], [1.72859166E12, 176.0], [1.72859184E12, 160.0], [1.72859172E12, 169.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72859178E12, 175.0], [1.72859166E12, 208.0], [1.72859184E12, 172.0], [1.72859172E12, 187.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72859184E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 172.0, "minX": 1.0, "maxY": 210.0, "series": [{"data": [[4.0, 210.0], [2.0, 179.5], [1.0, 172.0], [3.0, 180.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 128.0, "minX": 1.0, "maxY": 136.0, "series": [{"data": [[4.0, 136.0], [2.0, 135.5], [1.0, 128.0], [3.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.72859166E12, "maxY": 2.783333333333333, "series": [{"data": [[1.72859178E12, 2.7666666666666666], [1.72859166E12, 0.21666666666666667], [1.72859184E12, 2.566666666666667], [1.72859172E12, 2.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72859184E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.72859166E12, "maxY": 2.783333333333333, "series": [{"data": [[1.72859178E12, 2.783333333333333], [1.72859166E12, 0.21666666666666667], [1.72859184E12, 2.566666666666667], [1.72859172E12, 2.7666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72859184E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.72859166E12, "maxY": 2.783333333333333, "series": [{"data": [[1.72859178E12, 2.783333333333333], [1.72859166E12, 0.21666666666666667], [1.72859184E12, 2.566666666666667], [1.72859172E12, 2.7666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72859184E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.72859166E12, "maxY": 2.783333333333333, "series": [{"data": [[1.72859178E12, 2.783333333333333], [1.72859166E12, 0.21666666666666667], [1.72859184E12, 2.566666666666667], [1.72859172E12, 2.7666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72859184E12, "title": "Total Transactions Per Second"}},
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

