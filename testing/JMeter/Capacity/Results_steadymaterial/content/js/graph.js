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
        data: {"result": {"minY": 154.0, "minX": 0.0, "maxY": 3529.0, "series": [{"data": [[0.0, 154.0], [0.1, 161.0], [0.2, 163.0], [0.3, 163.0], [0.4, 164.0], [0.5, 164.0], [0.6, 165.0], [0.7, 165.0], [0.8, 165.0], [0.9, 166.0], [1.0, 166.0], [1.1, 166.0], [1.2, 166.0], [1.3, 166.0], [1.4, 167.0], [1.5, 167.0], [1.6, 167.0], [1.7, 167.0], [1.8, 167.0], [1.9, 167.0], [2.0, 168.0], [2.1, 168.0], [2.2, 168.0], [2.3, 168.0], [2.4, 168.0], [2.5, 168.0], [2.6, 168.0], [2.7, 168.0], [2.8, 168.0], [2.9, 169.0], [3.0, 169.0], [3.1, 169.0], [3.2, 169.0], [3.3, 169.0], [3.4, 169.0], [3.5, 169.0], [3.6, 169.0], [3.7, 169.0], [3.8, 169.0], [3.9, 169.0], [4.0, 170.0], [4.1, 170.0], [4.2, 170.0], [4.3, 170.0], [4.4, 170.0], [4.5, 170.0], [4.6, 170.0], [4.7, 170.0], [4.8, 170.0], [4.9, 170.0], [5.0, 170.0], [5.1, 170.0], [5.2, 170.0], [5.3, 170.0], [5.4, 170.0], [5.5, 171.0], [5.6, 171.0], [5.7, 171.0], [5.8, 171.0], [5.9, 171.0], [6.0, 171.0], [6.1, 171.0], [6.2, 171.0], [6.3, 171.0], [6.4, 171.0], [6.5, 171.0], [6.6, 171.0], [6.7, 171.0], [6.8, 171.0], [6.9, 171.0], [7.0, 171.0], [7.1, 171.0], [7.2, 171.0], [7.3, 171.0], [7.4, 172.0], [7.5, 172.0], [7.6, 172.0], [7.7, 172.0], [7.8, 172.0], [7.9, 172.0], [8.0, 172.0], [8.1, 172.0], [8.2, 172.0], [8.3, 172.0], [8.4, 172.0], [8.5, 172.0], [8.6, 172.0], [8.7, 172.0], [8.8, 172.0], [8.9, 172.0], [9.0, 172.0], [9.1, 172.0], [9.2, 172.0], [9.3, 172.0], [9.4, 172.0], [9.5, 173.0], [9.6, 173.0], [9.7, 173.0], [9.8, 173.0], [9.9, 173.0], [10.0, 173.0], [10.1, 173.0], [10.2, 173.0], [10.3, 173.0], [10.4, 173.0], [10.5, 173.0], [10.6, 173.0], [10.7, 173.0], [10.8, 173.0], [10.9, 173.0], [11.0, 173.0], [11.1, 173.0], [11.2, 173.0], [11.3, 173.0], [11.4, 173.0], [11.5, 173.0], [11.6, 173.0], [11.7, 173.0], [11.8, 173.0], [11.9, 173.0], [12.0, 173.0], [12.1, 174.0], [12.2, 174.0], [12.3, 174.0], [12.4, 174.0], [12.5, 174.0], [12.6, 174.0], [12.7, 174.0], [12.8, 174.0], [12.9, 174.0], [13.0, 174.0], [13.1, 174.0], [13.2, 174.0], [13.3, 174.0], [13.4, 174.0], [13.5, 174.0], [13.6, 174.0], [13.7, 174.0], [13.8, 174.0], [13.9, 174.0], [14.0, 174.0], [14.1, 174.0], [14.2, 174.0], [14.3, 174.0], [14.4, 174.0], [14.5, 174.0], [14.6, 174.0], [14.7, 174.0], [14.8, 174.0], [14.9, 175.0], [15.0, 175.0], [15.1, 175.0], [15.2, 175.0], [15.3, 175.0], [15.4, 175.0], [15.5, 175.0], [15.6, 175.0], [15.7, 175.0], [15.8, 175.0], [15.9, 175.0], [16.0, 175.0], [16.1, 175.0], [16.2, 175.0], [16.3, 175.0], [16.4, 175.0], [16.5, 175.0], [16.6, 175.0], [16.7, 175.0], [16.8, 175.0], [16.9, 175.0], [17.0, 175.0], [17.1, 175.0], [17.2, 175.0], [17.3, 175.0], [17.4, 175.0], [17.5, 175.0], [17.6, 175.0], [17.7, 175.0], [17.8, 175.0], [17.9, 175.0], [18.0, 175.0], [18.1, 176.0], [18.2, 176.0], [18.3, 176.0], [18.4, 176.0], [18.5, 176.0], [18.6, 176.0], [18.7, 176.0], [18.8, 176.0], [18.9, 176.0], [19.0, 176.0], [19.1, 176.0], [19.2, 176.0], [19.3, 176.0], [19.4, 176.0], [19.5, 176.0], [19.6, 176.0], [19.7, 176.0], [19.8, 176.0], [19.9, 176.0], [20.0, 176.0], [20.1, 176.0], [20.2, 176.0], [20.3, 176.0], [20.4, 176.0], [20.5, 176.0], [20.6, 176.0], [20.7, 176.0], [20.8, 176.0], [20.9, 176.0], [21.0, 176.0], [21.1, 176.0], [21.2, 176.0], [21.3, 176.0], [21.4, 176.0], [21.5, 177.0], [21.6, 177.0], [21.7, 177.0], [21.8, 177.0], [21.9, 177.0], [22.0, 177.0], [22.1, 177.0], [22.2, 177.0], [22.3, 177.0], [22.4, 177.0], [22.5, 177.0], [22.6, 177.0], [22.7, 177.0], [22.8, 177.0], [22.9, 177.0], [23.0, 177.0], [23.1, 177.0], [23.2, 177.0], [23.3, 177.0], [23.4, 177.0], [23.5, 177.0], [23.6, 177.0], [23.7, 177.0], [23.8, 177.0], [23.9, 177.0], [24.0, 177.0], [24.1, 177.0], [24.2, 177.0], [24.3, 177.0], [24.4, 177.0], [24.5, 177.0], [24.6, 177.0], [24.7, 177.0], [24.8, 177.0], [24.9, 177.0], [25.0, 177.0], [25.1, 177.0], [25.2, 178.0], [25.3, 178.0], [25.4, 178.0], [25.5, 178.0], [25.6, 178.0], [25.7, 178.0], [25.8, 178.0], [25.9, 178.0], [26.0, 178.0], [26.1, 178.0], [26.2, 178.0], [26.3, 178.0], [26.4, 178.0], [26.5, 178.0], [26.6, 178.0], [26.7, 178.0], [26.8, 178.0], [26.9, 178.0], [27.0, 178.0], [27.1, 178.0], [27.2, 178.0], [27.3, 178.0], [27.4, 178.0], [27.5, 178.0], [27.6, 178.0], [27.7, 178.0], [27.8, 178.0], [27.9, 178.0], [28.0, 178.0], [28.1, 178.0], [28.2, 178.0], [28.3, 178.0], [28.4, 178.0], [28.5, 178.0], [28.6, 178.0], [28.7, 178.0], [28.8, 178.0], [28.9, 178.0], [29.0, 179.0], [29.1, 179.0], [29.2, 179.0], [29.3, 179.0], [29.4, 179.0], [29.5, 179.0], [29.6, 179.0], [29.7, 179.0], [29.8, 179.0], [29.9, 179.0], [30.0, 179.0], [30.1, 179.0], [30.2, 179.0], [30.3, 179.0], [30.4, 179.0], [30.5, 179.0], [30.6, 179.0], [30.7, 179.0], [30.8, 179.0], [30.9, 179.0], [31.0, 179.0], [31.1, 179.0], [31.2, 179.0], [31.3, 179.0], [31.4, 179.0], [31.5, 179.0], [31.6, 179.0], [31.7, 179.0], [31.8, 179.0], [31.9, 179.0], [32.0, 179.0], [32.1, 179.0], [32.2, 179.0], [32.3, 179.0], [32.4, 179.0], [32.5, 179.0], [32.6, 179.0], [32.7, 180.0], [32.8, 180.0], [32.9, 180.0], [33.0, 180.0], [33.1, 180.0], [33.2, 180.0], [33.3, 180.0], [33.4, 180.0], [33.5, 180.0], [33.6, 180.0], [33.7, 180.0], [33.8, 180.0], [33.9, 180.0], [34.0, 180.0], [34.1, 180.0], [34.2, 180.0], [34.3, 180.0], [34.4, 180.0], [34.5, 180.0], [34.6, 180.0], [34.7, 180.0], [34.8, 180.0], [34.9, 180.0], [35.0, 180.0], [35.1, 180.0], [35.2, 180.0], [35.3, 180.0], [35.4, 180.0], [35.5, 180.0], [35.6, 180.0], [35.7, 180.0], [35.8, 180.0], [35.9, 180.0], [36.0, 180.0], [36.1, 180.0], [36.2, 180.0], [36.3, 180.0], [36.4, 180.0], [36.5, 181.0], [36.6, 181.0], [36.7, 181.0], [36.8, 181.0], [36.9, 181.0], [37.0, 181.0], [37.1, 181.0], [37.2, 181.0], [37.3, 181.0], [37.4, 181.0], [37.5, 181.0], [37.6, 181.0], [37.7, 181.0], [37.8, 181.0], [37.9, 181.0], [38.0, 181.0], [38.1, 181.0], [38.2, 181.0], [38.3, 181.0], [38.4, 181.0], [38.5, 181.0], [38.6, 181.0], [38.7, 181.0], [38.8, 181.0], [38.9, 181.0], [39.0, 181.0], [39.1, 181.0], [39.2, 181.0], [39.3, 181.0], [39.4, 181.0], [39.5, 181.0], [39.6, 181.0], [39.7, 181.0], [39.8, 181.0], [39.9, 181.0], [40.0, 181.0], [40.1, 181.0], [40.2, 181.0], [40.3, 181.0], [40.4, 181.0], [40.5, 182.0], [40.6, 182.0], [40.7, 182.0], [40.8, 182.0], [40.9, 182.0], [41.0, 182.0], [41.1, 182.0], [41.2, 182.0], [41.3, 182.0], [41.4, 182.0], [41.5, 182.0], [41.6, 182.0], [41.7, 182.0], [41.8, 182.0], [41.9, 182.0], [42.0, 182.0], [42.1, 182.0], [42.2, 182.0], [42.3, 182.0], [42.4, 182.0], [42.5, 182.0], [42.6, 182.0], [42.7, 182.0], [42.8, 182.0], [42.9, 182.0], [43.0, 182.0], [43.1, 182.0], [43.2, 182.0], [43.3, 182.0], [43.4, 182.0], [43.5, 182.0], [43.6, 182.0], [43.7, 182.0], [43.8, 182.0], [43.9, 182.0], [44.0, 182.0], [44.1, 182.0], [44.2, 182.0], [44.3, 183.0], [44.4, 183.0], [44.5, 183.0], [44.6, 183.0], [44.7, 183.0], [44.8, 183.0], [44.9, 183.0], [45.0, 183.0], [45.1, 183.0], [45.2, 183.0], [45.3, 183.0], [45.4, 183.0], [45.5, 183.0], [45.6, 183.0], [45.7, 183.0], [45.8, 183.0], [45.9, 183.0], [46.0, 183.0], [46.1, 183.0], [46.2, 183.0], [46.3, 183.0], [46.4, 183.0], [46.5, 183.0], [46.6, 183.0], [46.7, 183.0], [46.8, 183.0], [46.9, 183.0], [47.0, 183.0], [47.1, 183.0], [47.2, 183.0], [47.3, 183.0], [47.4, 183.0], [47.5, 183.0], [47.6, 183.0], [47.7, 183.0], [47.8, 183.0], [47.9, 184.0], [48.0, 184.0], [48.1, 184.0], [48.2, 184.0], [48.3, 184.0], [48.4, 184.0], [48.5, 184.0], [48.6, 184.0], [48.7, 184.0], [48.8, 184.0], [48.9, 184.0], [49.0, 184.0], [49.1, 184.0], [49.2, 184.0], [49.3, 184.0], [49.4, 184.0], [49.5, 184.0], [49.6, 184.0], [49.7, 184.0], [49.8, 184.0], [49.9, 184.0], [50.0, 184.0], [50.1, 184.0], [50.2, 184.0], [50.3, 184.0], [50.4, 184.0], [50.5, 184.0], [50.6, 184.0], [50.7, 184.0], [50.8, 184.0], [50.9, 184.0], [51.0, 184.0], [51.1, 184.0], [51.2, 184.0], [51.3, 185.0], [51.4, 185.0], [51.5, 185.0], [51.6, 185.0], [51.7, 185.0], [51.8, 185.0], [51.9, 185.0], [52.0, 185.0], [52.1, 185.0], [52.2, 185.0], [52.3, 185.0], [52.4, 185.0], [52.5, 185.0], [52.6, 185.0], [52.7, 185.0], [52.8, 185.0], [52.9, 185.0], [53.0, 185.0], [53.1, 185.0], [53.2, 185.0], [53.3, 185.0], [53.4, 185.0], [53.5, 185.0], [53.6, 185.0], [53.7, 185.0], [53.8, 185.0], [53.9, 185.0], [54.0, 185.0], [54.1, 185.0], [54.2, 185.0], [54.3, 185.0], [54.4, 185.0], [54.5, 186.0], [54.6, 186.0], [54.7, 186.0], [54.8, 186.0], [54.9, 186.0], [55.0, 186.0], [55.1, 186.0], [55.2, 186.0], [55.3, 186.0], [55.4, 186.0], [55.5, 186.0], [55.6, 186.0], [55.7, 186.0], [55.8, 186.0], [55.9, 186.0], [56.0, 186.0], [56.1, 186.0], [56.2, 186.0], [56.3, 186.0], [56.4, 186.0], [56.5, 186.0], [56.6, 186.0], [56.7, 186.0], [56.8, 186.0], [56.9, 186.0], [57.0, 186.0], [57.1, 186.0], [57.2, 186.0], [57.3, 186.0], [57.4, 186.0], [57.5, 187.0], [57.6, 187.0], [57.7, 187.0], [57.8, 187.0], [57.9, 187.0], [58.0, 187.0], [58.1, 187.0], [58.2, 187.0], [58.3, 187.0], [58.4, 187.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 187.0], [58.9, 187.0], [59.0, 187.0], [59.1, 187.0], [59.2, 187.0], [59.3, 187.0], [59.4, 187.0], [59.5, 187.0], [59.6, 187.0], [59.7, 187.0], [59.8, 187.0], [59.9, 187.0], [60.0, 187.0], [60.1, 187.0], [60.2, 187.0], [60.3, 188.0], [60.4, 188.0], [60.5, 188.0], [60.6, 188.0], [60.7, 188.0], [60.8, 188.0], [60.9, 188.0], [61.0, 188.0], [61.1, 188.0], [61.2, 188.0], [61.3, 188.0], [61.4, 188.0], [61.5, 188.0], [61.6, 188.0], [61.7, 188.0], [61.8, 188.0], [61.9, 188.0], [62.0, 188.0], [62.1, 188.0], [62.2, 188.0], [62.3, 188.0], [62.4, 188.0], [62.5, 188.0], [62.6, 188.0], [62.7, 188.0], [62.8, 188.0], [62.9, 189.0], [63.0, 189.0], [63.1, 189.0], [63.2, 189.0], [63.3, 189.0], [63.4, 189.0], [63.5, 189.0], [63.6, 189.0], [63.7, 189.0], [63.8, 189.0], [63.9, 189.0], [64.0, 189.0], [64.1, 189.0], [64.2, 189.0], [64.3, 189.0], [64.4, 189.0], [64.5, 189.0], [64.6, 189.0], [64.7, 189.0], [64.8, 189.0], [64.9, 189.0], [65.0, 189.0], [65.1, 189.0], [65.2, 190.0], [65.3, 190.0], [65.4, 190.0], [65.5, 190.0], [65.6, 190.0], [65.7, 190.0], [65.8, 190.0], [65.9, 190.0], [66.0, 190.0], [66.1, 190.0], [66.2, 190.0], [66.3, 190.0], [66.4, 190.0], [66.5, 190.0], [66.6, 190.0], [66.7, 190.0], [66.8, 190.0], [66.9, 190.0], [67.0, 190.0], [67.1, 190.0], [67.2, 190.0], [67.3, 191.0], [67.4, 191.0], [67.5, 191.0], [67.6, 191.0], [67.7, 191.0], [67.8, 191.0], [67.9, 191.0], [68.0, 191.0], [68.1, 191.0], [68.2, 191.0], [68.3, 191.0], [68.4, 191.0], [68.5, 191.0], [68.6, 191.0], [68.7, 191.0], [68.8, 191.0], [68.9, 191.0], [69.0, 191.0], [69.1, 191.0], [69.2, 191.0], [69.3, 192.0], [69.4, 192.0], [69.5, 192.0], [69.6, 192.0], [69.7, 192.0], [69.8, 192.0], [69.9, 192.0], [70.0, 192.0], [70.1, 192.0], [70.2, 192.0], [70.3, 192.0], [70.4, 192.0], [70.5, 192.0], [70.6, 192.0], [70.7, 192.0], [70.8, 192.0], [70.9, 192.0], [71.0, 192.0], [71.1, 192.0], [71.2, 193.0], [71.3, 193.0], [71.4, 193.0], [71.5, 193.0], [71.6, 193.0], [71.7, 193.0], [71.8, 193.0], [71.9, 193.0], [72.0, 193.0], [72.1, 193.0], [72.2, 193.0], [72.3, 193.0], [72.4, 193.0], [72.5, 193.0], [72.6, 193.0], [72.7, 193.0], [72.8, 194.0], [72.9, 194.0], [73.0, 194.0], [73.1, 194.0], [73.2, 194.0], [73.3, 194.0], [73.4, 194.0], [73.5, 194.0], [73.6, 194.0], [73.7, 194.0], [73.8, 194.0], [73.9, 194.0], [74.0, 194.0], [74.1, 194.0], [74.2, 194.0], [74.3, 195.0], [74.4, 195.0], [74.5, 195.0], [74.6, 195.0], [74.7, 195.0], [74.8, 195.0], [74.9, 195.0], [75.0, 195.0], [75.1, 195.0], [75.2, 195.0], [75.3, 195.0], [75.4, 195.0], [75.5, 195.0], [75.6, 196.0], [75.7, 196.0], [75.8, 196.0], [75.9, 196.0], [76.0, 196.0], [76.1, 196.0], [76.2, 196.0], [76.3, 196.0], [76.4, 196.0], [76.5, 196.0], [76.6, 196.0], [76.7, 196.0], [76.8, 196.0], [76.9, 197.0], [77.0, 197.0], [77.1, 197.0], [77.2, 197.0], [77.3, 197.0], [77.4, 197.0], [77.5, 197.0], [77.6, 197.0], [77.7, 197.0], [77.8, 197.0], [77.9, 197.0], [78.0, 197.0], [78.1, 198.0], [78.2, 198.0], [78.3, 198.0], [78.4, 198.0], [78.5, 198.0], [78.6, 198.0], [78.7, 198.0], [78.8, 198.0], [78.9, 198.0], [79.0, 198.0], [79.1, 199.0], [79.2, 199.0], [79.3, 199.0], [79.4, 199.0], [79.5, 199.0], [79.6, 199.0], [79.7, 199.0], [79.8, 199.0], [79.9, 199.0], [80.0, 199.0], [80.1, 200.0], [80.2, 200.0], [80.3, 200.0], [80.4, 200.0], [80.5, 200.0], [80.6, 200.0], [80.7, 200.0], [80.8, 200.0], [80.9, 200.0], [81.0, 201.0], [81.1, 201.0], [81.2, 201.0], [81.3, 201.0], [81.4, 201.0], [81.5, 201.0], [81.6, 201.0], [81.7, 201.0], [81.8, 201.0], [81.9, 202.0], [82.0, 202.0], [82.1, 202.0], [82.2, 202.0], [82.3, 202.0], [82.4, 202.0], [82.5, 202.0], [82.6, 202.0], [82.7, 203.0], [82.8, 203.0], [82.9, 203.0], [83.0, 203.0], [83.1, 203.0], [83.2, 203.0], [83.3, 203.0], [83.4, 204.0], [83.5, 204.0], [83.6, 204.0], [83.7, 204.0], [83.8, 204.0], [83.9, 204.0], [84.0, 205.0], [84.1, 205.0], [84.2, 205.0], [84.3, 205.0], [84.4, 205.0], [84.5, 205.0], [84.6, 205.0], [84.7, 206.0], [84.8, 206.0], [84.9, 206.0], [85.0, 206.0], [85.1, 206.0], [85.2, 206.0], [85.3, 207.0], [85.4, 207.0], [85.5, 207.0], [85.6, 207.0], [85.7, 207.0], [85.8, 207.0], [85.9, 208.0], [86.0, 208.0], [86.1, 208.0], [86.2, 208.0], [86.3, 208.0], [86.4, 208.0], [86.5, 209.0], [86.6, 209.0], [86.7, 209.0], [86.8, 209.0], [86.9, 209.0], [87.0, 210.0], [87.1, 210.0], [87.2, 210.0], [87.3, 210.0], [87.4, 210.0], [87.5, 210.0], [87.6, 211.0], [87.7, 211.0], [87.8, 211.0], [87.9, 211.0], [88.0, 211.0], [88.1, 212.0], [88.2, 212.0], [88.3, 212.0], [88.4, 212.0], [88.5, 213.0], [88.6, 213.0], [88.7, 213.0], [88.8, 213.0], [88.9, 213.0], [89.0, 214.0], [89.1, 214.0], [89.2, 214.0], [89.3, 214.0], [89.4, 215.0], [89.5, 215.0], [89.6, 215.0], [89.7, 215.0], [89.8, 216.0], [89.9, 216.0], [90.0, 216.0], [90.1, 217.0], [90.2, 217.0], [90.3, 217.0], [90.4, 218.0], [90.5, 218.0], [90.6, 218.0], [90.7, 218.0], [90.8, 219.0], [90.9, 219.0], [91.0, 219.0], [91.1, 220.0], [91.2, 220.0], [91.3, 221.0], [91.4, 221.0], [91.5, 221.0], [91.6, 222.0], [91.7, 222.0], [91.8, 222.0], [91.9, 223.0], [92.0, 223.0], [92.1, 224.0], [92.2, 224.0], [92.3, 225.0], [92.4, 225.0], [92.5, 226.0], [92.6, 226.0], [92.7, 227.0], [92.8, 227.0], [92.9, 228.0], [93.0, 228.0], [93.1, 229.0], [93.2, 229.0], [93.3, 230.0], [93.4, 230.0], [93.5, 231.0], [93.6, 231.0], [93.7, 232.0], [93.8, 233.0], [93.9, 234.0], [94.0, 234.0], [94.1, 235.0], [94.2, 236.0], [94.3, 237.0], [94.4, 238.0], [94.5, 239.0], [94.6, 240.0], [94.7, 241.0], [94.8, 242.0], [94.9, 243.0], [95.0, 245.0], [95.1, 246.0], [95.2, 247.0], [95.3, 249.0], [95.4, 250.0], [95.5, 252.0], [95.6, 253.0], [95.7, 254.0], [95.8, 256.0], [95.9, 258.0], [96.0, 259.0], [96.1, 262.0], [96.2, 264.0], [96.3, 266.0], [96.4, 268.0], [96.5, 271.0], [96.6, 273.0], [96.7, 277.0], [96.8, 279.0], [96.9, 282.0], [97.0, 285.0], [97.1, 289.0], [97.2, 292.0], [97.3, 295.0], [97.4, 299.0], [97.5, 301.0], [97.6, 306.0], [97.7, 310.0], [97.8, 315.0], [97.9, 320.0], [98.0, 326.0], [98.1, 332.0], [98.2, 340.0], [98.3, 348.0], [98.4, 359.0], [98.5, 370.0], [98.6, 382.0], [98.7, 397.0], [98.8, 416.0], [98.9, 439.0], [99.0, 464.0], [99.1, 483.0], [99.2, 504.0], [99.3, 517.0], [99.4, 526.0], [99.5, 542.0], [99.6, 626.0], [99.7, 777.0], [99.8, 1182.0], [99.9, 1199.0], [100.0, 3529.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 70890.0, "series": [{"data": [[2200.0, 2.0], [600.0, 40.0], [700.0, 76.0], [800.0, 25.0], [200.0, 15377.0], [3200.0, 1.0], [3500.0, 1.0], [900.0, 2.0], [1000.0, 5.0], [1100.0, 132.0], [300.0, 1139.0], [1200.0, 72.0], [1300.0, 4.0], [1400.0, 5.0], [1500.0, 1.0], [100.0, 70890.0], [400.0, 401.0], [1800.0, 1.0], [500.0, 368.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 87814.0, "series": [{"data": [[0.0, 87814.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 722.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.632558139534884, "minX": 1.72903524E12, "maxY": 50.0, "series": [{"data": [[1.72903632E12, 50.0], [1.72903602E12, 50.0], [1.72903572E12, 50.0], [1.72903542E12, 30.35711892797316], [1.72903674E12, 50.0], [1.72903704E12, 49.21032258064515], [1.72903644E12, 50.0], [1.72903614E12, 50.0], [1.7290368E12, 50.0], [1.7290365E12, 50.0], [1.7290362E12, 50.0], [1.7290359E12, 50.0], [1.7290356E12, 50.0], [1.7290353E12, 10.761941153993078], [1.72903662E12, 50.0], [1.72903692E12, 50.0], [1.72903536E12, 20.368122707569167], [1.72903698E12, 50.0], [1.72903668E12, 50.0], [1.72903638E12, 50.0], [1.72903608E12, 50.0], [1.72903578E12, 50.0], [1.72903548E12, 40.35688103965341], [1.72903584E12, 50.0], [1.72903554E12, 48.925999999999895], [1.72903524E12, 3.632558139534884], [1.72903686E12, 50.0], [1.72903656E12, 50.0], [1.72903626E12, 50.0], [1.72903596E12, 50.0], [1.72903566E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903704E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 183.25167785234896, "minX": 1.0, "maxY": 289.24573378839557, "series": [{"data": [[2.0, 195.2741935483871], [3.0, 195.5326086956522], [4.0, 189.27343749999991], [5.0, 196.6357615894039], [6.0, 201.0222222222222], [7.0, 201.60096153846143], [8.0, 197.15637860082302], [9.0, 197.9148148148148], [10.0, 204.38078291814946], [11.0, 211.78014184397165], [12.0, 190.3900000000001], [13.0, 193.6406779661017], [14.0, 215.7158273381296], [15.0, 199.9773462783171], [16.0, 196.57095709570953], [17.0, 195.95254237288148], [18.0, 191.17940199335544], [19.0, 185.0233333333334], [20.0, 200.4950495049504], [21.0, 183.25167785234896], [22.0, 187.8519736842105], [23.0, 195.9468438538207], [24.0, 207.43189368770754], [25.0, 188.83388704318943], [26.0, 200.01655629139069], [27.0, 226.1677852348993], [28.0, 198.39610389610388], [29.0, 193.81632653061226], [30.0, 198.34219269102988], [31.0, 289.24573378839557], [32.0, 192.63000000000002], [33.0, 194.82894736842107], [34.0, 226.29966329966325], [35.0, 191.9735099337748], [36.0, 190.05263157894726], [37.0, 196.1898305084745], [38.0, 202.0297029702971], [39.0, 193.2675585284281], [40.0, 191.23684210526315], [41.0, 207.57947019867555], [42.0, 188.98327759197323], [43.0, 195.86378737541534], [44.0, 195.44], [45.0, 203.25163398692825], [46.0, 199.54026845637588], [47.0, 196.7218543046358], [48.0, 198.22185430463583], [49.0, 200.77333333333343], [50.0, 196.30826397936545], [1.0, 228.23999999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.572185265915934, 196.8837288097327]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 917.3333333333334, "minX": 1.72903524E12, "maxY": 4862289.0, "series": [{"data": [[1.72903632E12, 4849343.783333333], [1.72903602E12, 4849300.033333333], [1.72903572E12, 4849342.766666667], [1.72903542E12, 4829881.383333334], [1.72903674E12, 4850948.816666666], [1.72903704E12, 2508003.0], [1.72903644E12, 4849273.45], [1.72903614E12, 4849331.5], [1.7290368E12, 4849337.0], [1.7290365E12, 4852479.433333334], [1.7290362E12, 4854193.133333334], [1.7290359E12, 4852479.716666667], [1.7290356E12, 4854188.916666667], [1.7290353E12, 4234380.183333334], [1.72903662E12, 4850918.65], [1.72903692E12, 4862289.0], [1.72903536E12, 4852522.15], [1.72903698E12, 4859053.466666667], [1.72903668E12, 4854173.966666667], [1.72903638E12, 4850963.466666667], [1.72903608E12, 4855788.733333333], [1.72903578E12, 4850962.85], [1.72903548E12, 4855782.266666667], [1.72903584E12, 4849272.55], [1.72903554E12, 4854178.383333334], [1.72903524E12, 695746.0833333334], [1.72903686E12, 4834778.05], [1.72903656E12, 4850904.333333333], [1.72903626E12, 4850960.566666666], [1.72903596E12, 4850904.133333334], [1.72903566E12, 4855812.233333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72903632E12, 6393.6], [1.72903602E12, 6393.6], [1.72903572E12, 6393.6], [1.72903542E12, 6368.0], [1.72903674E12, 6395.733333333334], [1.72903704E12, 3306.6666666666665], [1.72903644E12, 6393.6], [1.72903614E12, 6393.6], [1.7290368E12, 6393.6], [1.7290365E12, 6397.866666666667], [1.7290362E12, 6400.0], [1.7290359E12, 6397.866666666667], [1.7290356E12, 6400.0], [1.7290353E12, 5582.933333333333], [1.72903662E12, 6395.733333333334], [1.72903692E12, 6410.666666666667], [1.72903536E12, 6397.866666666667], [1.72903698E12, 6406.4], [1.72903668E12, 6400.0], [1.72903638E12, 6395.733333333334], [1.72903608E12, 6402.133333333333], [1.72903578E12, 6395.733333333334], [1.72903548E12, 6402.133333333333], [1.72903584E12, 6393.6], [1.72903554E12, 6400.0], [1.72903524E12, 917.3333333333334], [1.72903686E12, 6374.4], [1.72903656E12, 6395.733333333334], [1.72903626E12, 6395.733333333334], [1.72903596E12, 6395.733333333334], [1.72903566E12, 6402.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903704E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 188.53468979319547, "minX": 1.72903524E12, "maxY": 217.24459234608977, "series": [{"data": [[1.72903632E12, 209.3159826493157], [1.72903602E12, 201.2395729062393], [1.72903572E12, 191.39139139139115], [1.72903542E12, 210.81507537688435], [1.72903674E12, 188.53468979319547], [1.72903704E12, 194.73612903225816], [1.72903644E12, 202.2315648982312], [1.72903614E12, 193.12445779112446], [1.7290368E12, 189.9165832499163], [1.7290365E12, 197.77959319773254], [1.7290362E12, 200.45366666666703], [1.7290359E12, 190.44114704901645], [1.7290356E12, 189.791], [1.7290353E12, 201.2032862055792], [1.72903662E12, 206.28485657104764], [1.72903692E12, 217.24459234608977], [1.72903536E12, 193.4224741580523], [1.72903698E12, 192.61405261405247], [1.72903668E12, 198.84066666666655], [1.72903638E12, 196.98498999332912], [1.72903608E12, 190.36621126291223], [1.72903578E12, 192.32421614409608], [1.72903548E12, 195.81439520159995], [1.72903584E12, 191.17384050717394], [1.72903554E12, 198.53733333333366], [1.72903524E12, 196.2534883720931], [1.72903686E12, 189.28447121820628], [1.72903656E12, 201.13642428285533], [1.72903626E12, 193.27518345563698], [1.72903596E12, 196.1030687124749], [1.72903566E12, 191.74341886037982]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903704E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 134.05837224816548, "minX": 1.72903524E12, "maxY": 153.37071547420982, "series": [{"data": [[1.72903632E12, 146.69569569569583], [1.72903602E12, 141.00567233900523], [1.72903572E12, 136.67801134467862], [1.72903542E12, 149.8633165829141], [1.72903674E12, 134.05837224816548], [1.72903704E12, 137.90064516129058], [1.72903644E12, 142.2782782782781], [1.72903614E12, 135.68968968968952], [1.7290368E12, 135.29462796129485], [1.7290365E12, 140.22740913637887], [1.7290362E12, 142.4756666666672], [1.7290359E12, 135.54684894965015], [1.7290356E12, 134.39500000000018], [1.7290353E12, 143.21589606419585], [1.72903662E12, 144.659106070714], [1.72903692E12, 153.37071547420982], [1.72903536E12, 137.24341447149013], [1.72903698E12, 137.37962037962012], [1.72903668E12, 141.1526666666668], [1.72903638E12, 139.07338225483676], [1.72903608E12, 135.60046651116332], [1.72903578E12, 136.6170780520346], [1.72903548E12, 140.30589803398877], [1.72903584E12, 135.89956623289973], [1.72903554E12, 139.53733333333295], [1.72903524E12, 141.08372093023257], [1.72903686E12, 135.3821954484605], [1.72903656E12, 142.04402935290216], [1.72903626E12, 137.66377585056694], [1.72903596E12, 139.33922615076708], [1.72903566E12, 136.48083972009331]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903704E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 86.43895930620403, "minX": 1.72903524E12, "maxY": 100.27420965058249, "series": [{"data": [[1.72903632E12, 96.51518184851504], [1.72903602E12, 92.3336670003335], [1.72903572E12, 89.03770437103788], [1.72903542E12, 98.52830820770534], [1.72903674E12, 86.43895930620403], [1.72903704E12, 89.10451612903216], [1.72903644E12, 92.66399733066383], [1.72903614E12, 87.87220553887238], [1.7290368E12, 87.64364364364367], [1.7290365E12, 90.69023007669233], [1.7290362E12, 92.68833333333335], [1.7290359E12, 87.63287762587552], [1.7290356E12, 87.7563333333335], [1.7290353E12, 93.1318303400844], [1.72903662E12, 94.41127418278856], [1.72903692E12, 100.27420965058249], [1.72903536E12, 88.86528842947652], [1.72903698E12, 88.81152181152176], [1.72903668E12, 92.58166666666668], [1.72903638E12, 90.23582388258839], [1.72903608E12, 87.98500499833374], [1.72903578E12, 88.96897931954625], [1.72903548E12, 92.04031989336896], [1.72903584E12, 88.4527861194527], [1.72903554E12, 91.51900000000006], [1.72903524E12, 91.95581395348836], [1.72903686E12, 87.73761713520729], [1.72903656E12, 92.9919946631089], [1.72903626E12, 89.55336891260839], [1.72903596E12, 91.05303535690447], [1.72903566E12, 88.45651449516846]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903704E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 154.0, "minX": 1.72903524E12, "maxY": 3529.0, "series": [{"data": [[1.72903632E12, 1266.0], [1.72903602E12, 1439.0], [1.72903572E12, 1205.0], [1.72903542E12, 1264.0], [1.72903674E12, 1200.0], [1.72903704E12, 1213.0], [1.72903644E12, 1288.0], [1.72903614E12, 2249.0], [1.7290368E12, 1230.0], [1.7290365E12, 1212.0], [1.7290362E12, 1197.0], [1.7290359E12, 1249.0], [1.7290356E12, 1215.0], [1.7290353E12, 1236.0], [1.72903662E12, 1262.0], [1.72903692E12, 3529.0], [1.72903536E12, 1191.0], [1.72903698E12, 1268.0], [1.72903668E12, 1245.0], [1.72903638E12, 2030.0], [1.72903608E12, 1246.0], [1.72903578E12, 1849.0], [1.72903548E12, 1253.0], [1.72903584E12, 2250.0], [1.72903554E12, 1264.0], [1.72903524E12, 889.0], [1.72903686E12, 1221.0], [1.72903656E12, 1411.0], [1.72903626E12, 1262.0], [1.72903596E12, 3202.0], [1.72903566E12, 1197.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72903632E12, 244.0], [1.72903602E12, 222.0], [1.72903572E12, 209.0], [1.72903542E12, 244.0], [1.72903674E12, 204.0], [1.72903704E12, 214.0], [1.72903644E12, 227.0], [1.72903614E12, 210.0], [1.7290368E12, 206.0], [1.7290365E12, 223.0], [1.7290362E12, 232.9000000000001], [1.7290359E12, 213.0], [1.7290356E12, 202.0], [1.7290353E12, 226.0], [1.72903662E12, 254.0], [1.72903692E12, 282.2000000000003], [1.72903536E12, 219.0], [1.72903698E12, 214.0], [1.72903668E12, 215.0], [1.72903638E12, 217.0999999999999], [1.72903608E12, 209.0], [1.72903578E12, 212.0], [1.72903548E12, 213.0], [1.72903584E12, 204.0], [1.72903554E12, 217.9000000000001], [1.72903524E12, 219.90000000000003], [1.72903686E12, 203.0], [1.72903656E12, 219.0], [1.72903626E12, 213.0], [1.72903596E12, 210.0], [1.72903566E12, 214.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72903632E12, 523.1199999999999], [1.72903602E12, 521.06], [1.72903572E12, 316.1999999999998], [1.72903542E12, 660.0], [1.72903674E12, 281.0], [1.72903704E12, 273.45000000000005], [1.72903644E12, 507.03999999999996], [1.72903614E12, 464.05999999999995], [1.7290368E12, 336.05999999999995], [1.7290365E12, 413.0], [1.7290362E12, 442.7799999999952], [1.7290359E12, 285.0], [1.7290356E12, 457.449999999988], [1.7290353E12, 430.5800000000031], [1.72903662E12, 518.0099999999998], [1.72903692E12, 582.2200000000007], [1.72903536E12, 346.0], [1.72903698E12, 297.9200000000001], [1.72903668E12, 517.9699999999993], [1.72903638E12, 451.11999999999716], [1.72903608E12, 265.0], [1.72903578E12, 325.0199999999995], [1.72903548E12, 337.9000000000001], [1.72903584E12, 384.1399999999999], [1.72903554E12, 533.9599999999991], [1.72903524E12, 333.96999999999997], [1.72903686E12, 291.1100000000001], [1.72903656E12, 520.039999999999], [1.72903626E12, 329.0599999999986], [1.72903596E12, 518.039999999999], [1.72903566E12, 375.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72903632E12, 325.0], [1.72903602E12, 274.0], [1.72903572E12, 221.0999999999999], [1.72903542E12, 319.6999999999998], [1.72903674E12, 216.0], [1.72903704E12, 225.44999999999982], [1.72903644E12, 272.0999999999999], [1.72903614E12, 226.0], [1.7290368E12, 216.0], [1.7290365E12, 264.0], [1.7290362E12, 268.0], [1.7290359E12, 231.0], [1.7290356E12, 216.0], [1.7290353E12, 260.0999999999999], [1.72903662E12, 307.0499999999997], [1.72903692E12, 379.6999999999998], [1.72903536E12, 256.0], [1.72903698E12, 236.0], [1.72903668E12, 235.0], [1.72903638E12, 234.0], [1.72903608E12, 221.0], [1.72903578E12, 231.0], [1.72903548E12, 228.0], [1.72903584E12, 219.0], [1.72903554E12, 237.0], [1.72903524E12, 245.79999999999995], [1.72903686E12, 215.54999999999973], [1.72903656E12, 258.0499999999997], [1.72903626E12, 238.0], [1.72903596E12, 227.0], [1.72903566E12, 251.9000000000001]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72903632E12, 159.0], [1.72903602E12, 158.0], [1.72903572E12, 154.0], [1.72903542E12, 159.0], [1.72903674E12, 156.0], [1.72903704E12, 164.0], [1.72903644E12, 156.0], [1.72903614E12, 159.0], [1.7290368E12, 159.0], [1.7290365E12, 160.0], [1.7290362E12, 160.0], [1.7290359E12, 158.0], [1.7290356E12, 155.0], [1.7290353E12, 159.0], [1.72903662E12, 154.0], [1.72903692E12, 158.0], [1.72903536E12, 158.0], [1.72903698E12, 157.0], [1.72903668E12, 156.0], [1.72903638E12, 159.0], [1.72903608E12, 159.0], [1.72903578E12, 161.0], [1.72903548E12, 162.0], [1.72903584E12, 161.0], [1.72903554E12, 162.0], [1.72903524E12, 169.0], [1.72903686E12, 161.0], [1.72903656E12, 157.0], [1.72903626E12, 159.0], [1.72903596E12, 160.0], [1.72903566E12, 158.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72903632E12, 186.0], [1.72903602E12, 184.0], [1.72903572E12, 183.0], [1.72903542E12, 186.0], [1.72903674E12, 183.0], [1.72903704E12, 187.0], [1.72903644E12, 185.0], [1.72903614E12, 184.0], [1.7290368E12, 182.0], [1.7290365E12, 184.0], [1.7290362E12, 186.0], [1.7290359E12, 183.0], [1.7290356E12, 181.0], [1.7290353E12, 189.0], [1.72903662E12, 186.0], [1.72903692E12, 187.0], [1.72903536E12, 183.0], [1.72903698E12, 185.0], [1.72903668E12, 185.0], [1.72903638E12, 186.0], [1.72903608E12, 184.0], [1.72903578E12, 183.0], [1.72903548E12, 185.0], [1.72903584E12, 182.0], [1.72903554E12, 184.0], [1.72903524E12, 187.0], [1.72903686E12, 182.0], [1.72903656E12, 185.0], [1.72903626E12, 183.0], [1.72903596E12, 184.0], [1.72903566E12, 181.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903704E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.0, "minX": 4.0, "maxY": 292.0, "series": [{"data": [[4.0, 225.5], [5.0, 201.0], [9.0, 203.0], [10.0, 183.0], [11.0, 191.0], [12.0, 182.0], [14.0, 190.5], [15.0, 193.0], [16.0, 183.0], [17.0, 182.0], [20.0, 189.0], [21.0, 181.0], [22.0, 183.5], [23.0, 190.0], [24.0, 186.5], [26.0, 186.0], [27.0, 189.0], [28.0, 202.0], [30.0, 192.0], [31.0, 186.5], [32.0, 186.0], [33.0, 193.0], [35.0, 207.0], [36.0, 196.5], [37.0, 188.5], [38.0, 196.0], [40.0, 202.0], [41.0, 192.0], [43.0, 195.0], [42.0, 258.5], [44.0, 202.0], [45.0, 187.0], [46.0, 190.0], [47.0, 187.0], [49.0, 183.0], [48.0, 184.0], [51.0, 184.0], [50.0, 184.0], [52.0, 186.0], [53.0, 185.0], [54.0, 192.0], [55.0, 191.0], [56.0, 195.0], [57.0, 207.5], [58.0, 187.5], [59.0, 272.0], [61.0, 272.5], [60.0, 246.5], [62.0, 190.5], [63.0, 292.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 130.0, "minX": 4.0, "maxY": 185.0, "series": [{"data": [[4.0, 165.0], [5.0, 149.0], [9.0, 146.5], [10.0, 133.5], [11.0, 136.0], [12.0, 132.5], [14.0, 140.5], [15.0, 139.0], [16.0, 133.0], [17.0, 132.0], [20.0, 136.5], [21.0, 130.0], [22.0, 134.5], [23.0, 139.0], [24.0, 132.5], [26.0, 133.0], [27.0, 137.0], [28.0, 141.5], [30.0, 138.0], [31.0, 133.0], [32.0, 134.0], [33.0, 136.0], [35.0, 148.0], [36.0, 140.0], [37.0, 135.5], [38.0, 140.0], [40.0, 144.0], [41.0, 137.0], [43.0, 136.0], [42.0, 173.5], [44.0, 142.0], [45.0, 134.0], [46.0, 135.0], [47.0, 133.0], [49.0, 131.0], [48.0, 132.0], [51.0, 132.0], [50.0, 132.0], [52.0, 133.0], [53.0, 133.0], [54.0, 137.0], [55.0, 137.0], [56.0, 139.0], [57.0, 148.5], [58.0, 135.0], [59.0, 185.0], [61.0, 180.0], [60.0, 168.0], [62.0, 140.0], [63.0, 169.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.25, "minX": 1.72903524E12, "maxY": 50.016666666666666, "series": [{"data": [[1.72903632E12, 49.93333333333333], [1.72903602E12, 49.983333333333334], [1.72903572E12, 49.983333333333334], [1.72903542E12, 49.81666666666667], [1.72903674E12, 50.0], [1.72903704E12, 25.75], [1.72903644E12, 50.0], [1.72903614E12, 49.96666666666667], [1.7290368E12, 49.96666666666667], [1.7290365E12, 49.983333333333334], [1.7290362E12, 49.983333333333334], [1.7290359E12, 50.0], [1.7290356E12, 49.983333333333334], [1.7290353E12, 43.68333333333333], [1.72903662E12, 49.983333333333334], [1.72903692E12, 49.85], [1.72903536E12, 49.95], [1.72903698E12, 50.0], [1.72903668E12, 49.95], [1.72903638E12, 49.95], [1.72903608E12, 49.983333333333334], [1.72903578E12, 49.95], [1.72903548E12, 49.983333333333334], [1.72903584E12, 49.983333333333334], [1.72903554E12, 50.016666666666666], [1.72903524E12, 7.25], [1.72903686E12, 50.0], [1.72903656E12, 49.96666666666667], [1.72903626E12, 49.93333333333333], [1.72903596E12, 49.95], [1.72903566E12, 49.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903704E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.166666666666667, "minX": 1.72903524E12, "maxY": 50.083333333333336, "series": [{"data": [[1.72903632E12, 49.95], [1.72903602E12, 49.95], [1.72903572E12, 49.95], [1.72903542E12, 49.75], [1.72903674E12, 49.96666666666667], [1.72903704E12, 25.833333333333332], [1.72903644E12, 49.95], [1.72903614E12, 49.95], [1.7290368E12, 49.95], [1.7290365E12, 49.983333333333334], [1.7290362E12, 50.0], [1.7290359E12, 49.983333333333334], [1.7290356E12, 50.0], [1.7290353E12, 43.61666666666667], [1.72903662E12, 49.96666666666667], [1.72903692E12, 50.083333333333336], [1.72903536E12, 49.983333333333334], [1.72903698E12, 50.05], [1.72903668E12, 50.0], [1.72903638E12, 49.96666666666667], [1.72903608E12, 50.016666666666666], [1.72903578E12, 49.96666666666667], [1.72903548E12, 50.016666666666666], [1.72903584E12, 49.95], [1.72903554E12, 50.0], [1.72903524E12, 7.166666666666667], [1.72903686E12, 49.8], [1.72903656E12, 49.96666666666667], [1.72903626E12, 49.96666666666667], [1.72903596E12, 49.96666666666667], [1.72903566E12, 50.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903704E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.166666666666667, "minX": 1.72903524E12, "maxY": 50.083333333333336, "series": [{"data": [[1.72903632E12, 49.95], [1.72903602E12, 49.95], [1.72903572E12, 49.95], [1.72903542E12, 49.75], [1.72903674E12, 49.96666666666667], [1.72903704E12, 25.833333333333332], [1.72903644E12, 49.95], [1.72903614E12, 49.95], [1.7290368E12, 49.95], [1.7290365E12, 49.983333333333334], [1.7290362E12, 50.0], [1.7290359E12, 49.983333333333334], [1.7290356E12, 50.0], [1.7290353E12, 43.61666666666667], [1.72903662E12, 49.96666666666667], [1.72903692E12, 50.083333333333336], [1.72903536E12, 49.983333333333334], [1.72903698E12, 50.05], [1.72903668E12, 50.0], [1.72903638E12, 49.96666666666667], [1.72903608E12, 50.016666666666666], [1.72903578E12, 49.96666666666667], [1.72903548E12, 50.016666666666666], [1.72903584E12, 49.95], [1.72903554E12, 50.0], [1.72903524E12, 7.166666666666667], [1.72903686E12, 49.8], [1.72903656E12, 49.96666666666667], [1.72903626E12, 49.96666666666667], [1.72903596E12, 49.96666666666667], [1.72903566E12, 50.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903704E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.166666666666667, "minX": 1.72903524E12, "maxY": 50.083333333333336, "series": [{"data": [[1.72903632E12, 49.95], [1.72903602E12, 49.95], [1.72903572E12, 49.95], [1.72903542E12, 49.75], [1.72903674E12, 49.96666666666667], [1.72903704E12, 25.833333333333332], [1.72903644E12, 49.95], [1.72903614E12, 49.95], [1.7290368E12, 49.95], [1.7290365E12, 49.983333333333334], [1.7290362E12, 50.0], [1.7290359E12, 49.983333333333334], [1.7290356E12, 50.0], [1.7290353E12, 43.61666666666667], [1.72903662E12, 49.96666666666667], [1.72903692E12, 50.083333333333336], [1.72903536E12, 49.983333333333334], [1.72903698E12, 50.05], [1.72903668E12, 50.0], [1.72903638E12, 49.96666666666667], [1.72903608E12, 50.016666666666666], [1.72903578E12, 49.96666666666667], [1.72903548E12, 50.016666666666666], [1.72903584E12, 49.95], [1.72903554E12, 50.0], [1.72903524E12, 7.166666666666667], [1.72903686E12, 49.8], [1.72903656E12, 49.96666666666667], [1.72903626E12, 49.96666666666667], [1.72903596E12, 49.96666666666667], [1.72903566E12, 50.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903704E12, "title": "Total Transactions Per Second"}},
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

