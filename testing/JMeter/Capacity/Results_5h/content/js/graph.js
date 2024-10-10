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
        data: {"result": {"minY": 161.0, "minX": 0.0, "maxY": 3954.0, "series": [{"data": [[0.0, 161.0], [0.1, 161.0], [0.2, 163.0], [0.3, 163.0], [0.4, 163.0], [0.5, 164.0], [0.6, 164.0], [0.7, 164.0], [0.8, 165.0], [0.9, 165.0], [1.0, 166.0], [1.1, 166.0], [1.2, 166.0], [1.3, 166.0], [1.4, 166.0], [1.5, 167.0], [1.6, 167.0], [1.7, 167.0], [1.8, 167.0], [1.9, 168.0], [2.0, 168.0], [2.1, 168.0], [2.2, 168.0], [2.3, 169.0], [2.4, 169.0], [2.5, 169.0], [2.6, 169.0], [2.7, 169.0], [2.8, 169.0], [2.9, 169.0], [3.0, 169.0], [3.1, 169.0], [3.2, 170.0], [3.3, 170.0], [3.4, 170.0], [3.5, 170.0], [3.6, 170.0], [3.7, 170.0], [3.8, 171.0], [3.9, 171.0], [4.0, 171.0], [4.1, 171.0], [4.2, 171.0], [4.3, 171.0], [4.4, 171.0], [4.5, 171.0], [4.6, 171.0], [4.7, 171.0], [4.8, 172.0], [4.9, 172.0], [5.0, 172.0], [5.1, 172.0], [5.2, 172.0], [5.3, 172.0], [5.4, 172.0], [5.5, 172.0], [5.6, 172.0], [5.7, 172.0], [5.8, 172.0], [5.9, 172.0], [6.0, 172.0], [6.1, 172.0], [6.2, 172.0], [6.3, 173.0], [6.4, 173.0], [6.5, 173.0], [6.6, 173.0], [6.7, 173.0], [6.8, 173.0], [6.9, 173.0], [7.0, 173.0], [7.1, 173.0], [7.2, 173.0], [7.3, 173.0], [7.4, 173.0], [7.5, 173.0], [7.6, 173.0], [7.7, 174.0], [7.8, 174.0], [7.9, 174.0], [8.0, 174.0], [8.1, 174.0], [8.2, 174.0], [8.3, 174.0], [8.4, 174.0], [8.5, 174.0], [8.6, 174.0], [8.7, 174.0], [8.8, 174.0], [8.9, 174.0], [9.0, 174.0], [9.1, 174.0], [9.2, 174.0], [9.3, 174.0], [9.4, 175.0], [9.5, 175.0], [9.6, 175.0], [9.7, 175.0], [9.8, 175.0], [9.9, 175.0], [10.0, 175.0], [10.1, 175.0], [10.2, 175.0], [10.3, 175.0], [10.4, 175.0], [10.5, 175.0], [10.6, 175.0], [10.7, 175.0], [10.8, 175.0], [10.9, 175.0], [11.0, 175.0], [11.1, 176.0], [11.2, 176.0], [11.3, 176.0], [11.4, 176.0], [11.5, 176.0], [11.6, 176.0], [11.7, 176.0], [11.8, 176.0], [11.9, 176.0], [12.0, 176.0], [12.1, 176.0], [12.2, 176.0], [12.3, 176.0], [12.4, 176.0], [12.5, 176.0], [12.6, 176.0], [12.7, 176.0], [12.8, 176.0], [12.9, 176.0], [13.0, 176.0], [13.1, 176.0], [13.2, 176.0], [13.3, 176.0], [13.4, 176.0], [13.5, 176.0], [13.6, 176.0], [13.7, 176.0], [13.8, 177.0], [13.9, 177.0], [14.0, 177.0], [14.1, 177.0], [14.2, 177.0], [14.3, 177.0], [14.4, 177.0], [14.5, 177.0], [14.6, 177.0], [14.7, 177.0], [14.8, 177.0], [14.9, 177.0], [15.0, 178.0], [15.1, 178.0], [15.2, 178.0], [15.3, 178.0], [15.4, 178.0], [15.5, 178.0], [15.6, 178.0], [15.7, 178.0], [15.8, 178.0], [15.9, 178.0], [16.0, 178.0], [16.1, 178.0], [16.2, 178.0], [16.3, 178.0], [16.4, 178.0], [16.5, 178.0], [16.6, 178.0], [16.7, 178.0], [16.8, 178.0], [16.9, 178.0], [17.0, 178.0], [17.1, 178.0], [17.2, 178.0], [17.3, 178.0], [17.4, 179.0], [17.5, 179.0], [17.6, 179.0], [17.7, 179.0], [17.8, 179.0], [17.9, 179.0], [18.0, 179.0], [18.1, 179.0], [18.2, 179.0], [18.3, 179.0], [18.4, 179.0], [18.5, 179.0], [18.6, 179.0], [18.7, 179.0], [18.8, 179.0], [18.9, 179.0], [19.0, 179.0], [19.1, 179.0], [19.2, 179.0], [19.3, 179.0], [19.4, 179.0], [19.5, 179.0], [19.6, 179.0], [19.7, 179.0], [19.8, 179.0], [19.9, 179.0], [20.0, 179.0], [20.1, 179.0], [20.2, 179.0], [20.3, 179.0], [20.4, 179.0], [20.5, 180.0], [20.6, 180.0], [20.7, 180.0], [20.8, 180.0], [20.9, 180.0], [21.0, 180.0], [21.1, 180.0], [21.2, 180.0], [21.3, 180.0], [21.4, 180.0], [21.5, 180.0], [21.6, 180.0], [21.7, 180.0], [21.8, 180.0], [21.9, 180.0], [22.0, 180.0], [22.1, 180.0], [22.2, 180.0], [22.3, 180.0], [22.4, 180.0], [22.5, 180.0], [22.6, 180.0], [22.7, 180.0], [22.8, 180.0], [22.9, 180.0], [23.0, 180.0], [23.1, 180.0], [23.2, 180.0], [23.3, 180.0], [23.4, 180.0], [23.5, 180.0], [23.6, 180.0], [23.7, 180.0], [23.8, 180.0], [23.9, 180.0], [24.0, 180.0], [24.1, 180.0], [24.2, 180.0], [24.3, 181.0], [24.4, 181.0], [24.5, 181.0], [24.6, 181.0], [24.7, 181.0], [24.8, 181.0], [24.9, 181.0], [25.0, 181.0], [25.1, 181.0], [25.2, 181.0], [25.3, 181.0], [25.4, 181.0], [25.5, 181.0], [25.6, 181.0], [25.7, 181.0], [25.8, 181.0], [25.9, 181.0], [26.0, 181.0], [26.1, 181.0], [26.2, 181.0], [26.3, 181.0], [26.4, 181.0], [26.5, 181.0], [26.6, 181.0], [26.7, 181.0], [26.8, 181.0], [26.9, 181.0], [27.0, 181.0], [27.1, 181.0], [27.2, 182.0], [27.3, 182.0], [27.4, 182.0], [27.5, 182.0], [27.6, 182.0], [27.7, 182.0], [27.8, 182.0], [27.9, 182.0], [28.0, 182.0], [28.1, 182.0], [28.2, 182.0], [28.3, 182.0], [28.4, 182.0], [28.5, 182.0], [28.6, 182.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 182.0], [29.5, 182.0], [29.6, 182.0], [29.7, 182.0], [29.8, 182.0], [29.9, 182.0], [30.0, 182.0], [30.1, 182.0], [30.2, 182.0], [30.3, 182.0], [30.4, 182.0], [30.5, 182.0], [30.6, 182.0], [30.7, 182.0], [30.8, 182.0], [30.9, 182.0], [31.0, 183.0], [31.1, 183.0], [31.2, 183.0], [31.3, 183.0], [31.4, 183.0], [31.5, 183.0], [31.6, 183.0], [31.7, 183.0], [31.8, 183.0], [31.9, 183.0], [32.0, 183.0], [32.1, 183.0], [32.2, 183.0], [32.3, 183.0], [32.4, 183.0], [32.5, 183.0], [32.6, 183.0], [32.7, 183.0], [32.8, 183.0], [32.9, 183.0], [33.0, 183.0], [33.1, 183.0], [33.2, 183.0], [33.3, 183.0], [33.4, 183.0], [33.5, 183.0], [33.6, 183.0], [33.7, 183.0], [33.8, 183.0], [33.9, 183.0], [34.0, 183.0], [34.1, 183.0], [34.2, 183.0], [34.3, 184.0], [34.4, 184.0], [34.5, 184.0], [34.6, 184.0], [34.7, 184.0], [34.8, 184.0], [34.9, 184.0], [35.0, 184.0], [35.1, 184.0], [35.2, 184.0], [35.3, 184.0], [35.4, 184.0], [35.5, 184.0], [35.6, 184.0], [35.7, 184.0], [35.8, 184.0], [35.9, 184.0], [36.0, 184.0], [36.1, 184.0], [36.2, 184.0], [36.3, 184.0], [36.4, 184.0], [36.5, 184.0], [36.6, 184.0], [36.7, 184.0], [36.8, 184.0], [36.9, 184.0], [37.0, 184.0], [37.1, 184.0], [37.2, 184.0], [37.3, 184.0], [37.4, 184.0], [37.5, 184.0], [37.6, 184.0], [37.7, 184.0], [37.8, 184.0], [37.9, 184.0], [38.0, 184.0], [38.1, 184.0], [38.2, 184.0], [38.3, 184.0], [38.4, 185.0], [38.5, 185.0], [38.6, 185.0], [38.7, 185.0], [38.8, 185.0], [38.9, 185.0], [39.0, 185.0], [39.1, 185.0], [39.2, 185.0], [39.3, 185.0], [39.4, 185.0], [39.5, 185.0], [39.6, 185.0], [39.7, 185.0], [39.8, 185.0], [39.9, 185.0], [40.0, 185.0], [40.1, 185.0], [40.2, 185.0], [40.3, 185.0], [40.4, 185.0], [40.5, 185.0], [40.6, 185.0], [40.7, 185.0], [40.8, 185.0], [40.9, 185.0], [41.0, 185.0], [41.1, 185.0], [41.2, 185.0], [41.3, 185.0], [41.4, 185.0], [41.5, 185.0], [41.6, 185.0], [41.7, 185.0], [41.8, 185.0], [41.9, 185.0], [42.0, 185.0], [42.1, 185.0], [42.2, 185.0], [42.3, 185.0], [42.4, 185.0], [42.5, 185.0], [42.6, 185.0], [42.7, 185.0], [42.8, 185.0], [42.9, 185.0], [43.0, 186.0], [43.1, 186.0], [43.2, 186.0], [43.3, 186.0], [43.4, 186.0], [43.5, 186.0], [43.6, 186.0], [43.7, 186.0], [43.8, 186.0], [43.9, 186.0], [44.0, 186.0], [44.1, 186.0], [44.2, 186.0], [44.3, 186.0], [44.4, 186.0], [44.5, 186.0], [44.6, 186.0], [44.7, 186.0], [44.8, 186.0], [44.9, 186.0], [45.0, 186.0], [45.1, 186.0], [45.2, 186.0], [45.3, 186.0], [45.4, 186.0], [45.5, 186.0], [45.6, 186.0], [45.7, 186.0], [45.8, 186.0], [45.9, 186.0], [46.0, 186.0], [46.1, 186.0], [46.2, 186.0], [46.3, 186.0], [46.4, 186.0], [46.5, 186.0], [46.6, 186.0], [46.7, 186.0], [46.8, 186.0], [46.9, 186.0], [47.0, 186.0], [47.1, 186.0], [47.2, 186.0], [47.3, 187.0], [47.4, 187.0], [47.5, 187.0], [47.6, 187.0], [47.7, 187.0], [47.8, 187.0], [47.9, 187.0], [48.0, 187.0], [48.1, 187.0], [48.2, 187.0], [48.3, 187.0], [48.4, 187.0], [48.5, 187.0], [48.6, 187.0], [48.7, 187.0], [48.8, 187.0], [48.9, 187.0], [49.0, 187.0], [49.1, 187.0], [49.2, 187.0], [49.3, 187.0], [49.4, 187.0], [49.5, 187.0], [49.6, 187.0], [49.7, 187.0], [49.8, 187.0], [49.9, 187.0], [50.0, 187.0], [50.1, 187.0], [50.2, 187.0], [50.3, 187.0], [50.4, 188.0], [50.5, 188.0], [50.6, 188.0], [50.7, 188.0], [50.8, 188.0], [50.9, 188.0], [51.0, 188.0], [51.1, 188.0], [51.2, 188.0], [51.3, 188.0], [51.4, 188.0], [51.5, 188.0], [51.6, 188.0], [51.7, 188.0], [51.8, 188.0], [51.9, 188.0], [52.0, 188.0], [52.1, 188.0], [52.2, 188.0], [52.3, 188.0], [52.4, 188.0], [52.5, 188.0], [52.6, 188.0], [52.7, 188.0], [52.8, 188.0], [52.9, 188.0], [53.0, 188.0], [53.1, 188.0], [53.2, 189.0], [53.3, 189.0], [53.4, 189.0], [53.5, 189.0], [53.6, 189.0], [53.7, 189.0], [53.8, 189.0], [53.9, 189.0], [54.0, 189.0], [54.1, 189.0], [54.2, 189.0], [54.3, 189.0], [54.4, 189.0], [54.5, 189.0], [54.6, 189.0], [54.7, 189.0], [54.8, 189.0], [54.9, 189.0], [55.0, 189.0], [55.1, 189.0], [55.2, 189.0], [55.3, 190.0], [55.4, 190.0], [55.5, 190.0], [55.6, 190.0], [55.7, 190.0], [55.8, 190.0], [55.9, 190.0], [56.0, 190.0], [56.1, 190.0], [56.2, 190.0], [56.3, 190.0], [56.4, 190.0], [56.5, 190.0], [56.6, 190.0], [56.7, 190.0], [56.8, 190.0], [56.9, 190.0], [57.0, 190.0], [57.1, 190.0], [57.2, 190.0], [57.3, 190.0], [57.4, 190.0], [57.5, 191.0], [57.6, 191.0], [57.7, 191.0], [57.8, 191.0], [57.9, 191.0], [58.0, 191.0], [58.1, 191.0], [58.2, 191.0], [58.3, 191.0], [58.4, 191.0], [58.5, 191.0], [58.6, 191.0], [58.7, 191.0], [58.8, 191.0], [58.9, 191.0], [59.0, 191.0], [59.1, 191.0], [59.2, 191.0], [59.3, 191.0], [59.4, 191.0], [59.5, 191.0], [59.6, 192.0], [59.7, 192.0], [59.8, 192.0], [59.9, 192.0], [60.0, 192.0], [60.1, 192.0], [60.2, 192.0], [60.3, 192.0], [60.4, 192.0], [60.5, 192.0], [60.6, 192.0], [60.7, 192.0], [60.8, 192.0], [60.9, 192.0], [61.0, 192.0], [61.1, 192.0], [61.2, 192.0], [61.3, 192.0], [61.4, 192.0], [61.5, 193.0], [61.6, 193.0], [61.7, 193.0], [61.8, 193.0], [61.9, 193.0], [62.0, 193.0], [62.1, 193.0], [62.2, 193.0], [62.3, 193.0], [62.4, 193.0], [62.5, 193.0], [62.6, 193.0], [62.7, 193.0], [62.8, 194.0], [62.9, 194.0], [63.0, 194.0], [63.1, 194.0], [63.2, 194.0], [63.3, 194.0], [63.4, 194.0], [63.5, 194.0], [63.6, 194.0], [63.7, 194.0], [63.8, 194.0], [63.9, 194.0], [64.0, 195.0], [64.1, 195.0], [64.2, 195.0], [64.3, 195.0], [64.4, 195.0], [64.5, 195.0], [64.6, 195.0], [64.7, 195.0], [64.8, 195.0], [64.9, 195.0], [65.0, 195.0], [65.1, 195.0], [65.2, 195.0], [65.3, 195.0], [65.4, 195.0], [65.5, 195.0], [65.6, 195.0], [65.7, 195.0], [65.8, 195.0], [65.9, 195.0], [66.0, 195.0], [66.1, 195.0], [66.2, 196.0], [66.3, 196.0], [66.4, 196.0], [66.5, 196.0], [66.6, 196.0], [66.7, 196.0], [66.8, 196.0], [66.9, 196.0], [67.0, 196.0], [67.1, 196.0], [67.2, 197.0], [67.3, 197.0], [67.4, 197.0], [67.5, 197.0], [67.6, 197.0], [67.7, 197.0], [67.8, 197.0], [67.9, 197.0], [68.0, 197.0], [68.1, 197.0], [68.2, 197.0], [68.3, 198.0], [68.4, 198.0], [68.5, 198.0], [68.6, 198.0], [68.7, 198.0], [68.8, 198.0], [68.9, 198.0], [69.0, 198.0], [69.1, 198.0], [69.2, 198.0], [69.3, 198.0], [69.4, 199.0], [69.5, 199.0], [69.6, 199.0], [69.7, 199.0], [69.8, 199.0], [69.9, 199.0], [70.0, 199.0], [70.1, 199.0], [70.2, 199.0], [70.3, 200.0], [70.4, 200.0], [70.5, 200.0], [70.6, 200.0], [70.7, 200.0], [70.8, 200.0], [70.9, 201.0], [71.0, 201.0], [71.1, 201.0], [71.2, 201.0], [71.3, 201.0], [71.4, 201.0], [71.5, 202.0], [71.6, 202.0], [71.7, 202.0], [71.8, 202.0], [71.9, 202.0], [72.0, 202.0], [72.1, 202.0], [72.2, 203.0], [72.3, 203.0], [72.4, 203.0], [72.5, 203.0], [72.6, 203.0], [72.7, 203.0], [72.8, 203.0], [72.9, 203.0], [73.0, 203.0], [73.1, 204.0], [73.2, 204.0], [73.3, 204.0], [73.4, 205.0], [73.5, 205.0], [73.6, 205.0], [73.7, 205.0], [73.8, 206.0], [73.9, 206.0], [74.0, 206.0], [74.1, 206.0], [74.2, 206.0], [74.3, 206.0], [74.4, 206.0], [74.5, 206.0], [74.6, 206.0], [74.7, 206.0], [74.8, 206.0], [74.9, 207.0], [75.0, 207.0], [75.1, 207.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 207.0], [75.6, 207.0], [75.7, 207.0], [75.8, 208.0], [75.9, 208.0], [76.0, 208.0], [76.1, 208.0], [76.2, 208.0], [76.3, 209.0], [76.4, 209.0], [76.5, 210.0], [76.6, 210.0], [76.7, 210.0], [76.8, 210.0], [76.9, 210.0], [77.0, 210.0], [77.1, 211.0], [77.2, 211.0], [77.3, 211.0], [77.4, 212.0], [77.5, 212.0], [77.6, 213.0], [77.7, 213.0], [77.8, 213.0], [77.9, 214.0], [78.0, 214.0], [78.1, 214.0], [78.2, 215.0], [78.3, 215.0], [78.4, 216.0], [78.5, 217.0], [78.6, 217.0], [78.7, 218.0], [78.8, 218.0], [78.9, 219.0], [79.0, 219.0], [79.1, 219.0], [79.2, 220.0], [79.3, 223.0], [79.4, 224.0], [79.5, 225.0], [79.6, 226.0], [79.7, 227.0], [79.8, 227.0], [79.9, 229.0], [80.0, 230.0], [80.1, 230.0], [80.2, 230.0], [80.3, 233.0], [80.4, 233.0], [80.5, 234.0], [80.6, 235.0], [80.7, 235.0], [80.8, 236.0], [80.9, 243.0], [81.0, 245.0], [81.1, 248.0], [81.2, 249.0], [81.3, 272.0], [81.4, 280.0], [81.5, 280.0], [81.6, 286.0], [81.7, 289.0], [81.8, 290.0], [81.9, 296.0], [82.0, 310.0], [82.1, 343.0], [82.2, 434.0], [82.3, 434.0], [82.4, 437.0], [82.5, 439.0], [82.6, 441.0], [82.7, 443.0], [82.8, 443.0], [82.9, 444.0], [83.0, 447.0], [83.1, 447.0], [83.2, 450.0], [83.3, 450.0], [83.4, 450.0], [83.5, 452.0], [83.6, 453.0], [83.7, 453.0], [83.8, 461.0], [83.9, 463.0], [84.0, 464.0], [84.1, 466.0], [84.2, 471.0], [84.3, 472.0], [84.4, 472.0], [84.5, 472.0], [84.6, 472.0], [84.7, 474.0], [84.8, 475.0], [84.9, 476.0], [85.0, 478.0], [85.1, 478.0], [85.2, 479.0], [85.3, 481.0], [85.4, 482.0], [85.5, 482.0], [85.6, 482.0], [85.7, 482.0], [85.8, 484.0], [85.9, 487.0], [86.0, 488.0], [86.1, 492.0], [86.2, 493.0], [86.3, 494.0], [86.4, 495.0], [86.5, 496.0], [86.6, 496.0], [86.7, 497.0], [86.8, 497.0], [86.9, 497.0], [87.0, 499.0], [87.1, 502.0], [87.2, 503.0], [87.3, 503.0], [87.4, 503.0], [87.5, 503.0], [87.6, 504.0], [87.7, 504.0], [87.8, 506.0], [87.9, 508.0], [88.0, 510.0], [88.1, 510.0], [88.2, 512.0], [88.3, 512.0], [88.4, 513.0], [88.5, 516.0], [88.6, 518.0], [88.7, 518.0], [88.8, 523.0], [88.9, 525.0], [89.0, 528.0], [89.1, 528.0], [89.2, 529.0], [89.3, 530.0], [89.4, 530.0], [89.5, 533.0], [89.6, 535.0], [89.7, 535.0], [89.8, 537.0], [89.9, 539.0], [90.0, 541.0], [90.1, 546.0], [90.2, 551.0], [90.3, 561.0], [90.4, 569.0], [90.5, 570.0], [90.6, 587.0], [90.7, 736.0], [90.8, 751.0], [90.9, 752.0], [91.0, 768.0], [91.1, 780.0], [91.2, 785.0], [91.3, 800.0], [91.4, 804.0], [91.5, 805.0], [91.6, 813.0], [91.7, 814.0], [91.8, 831.0], [91.9, 841.0], [92.0, 851.0], [92.1, 881.0], [92.2, 947.0], [92.3, 951.0], [92.4, 953.0], [92.5, 966.0], [92.6, 1177.0], [92.7, 1178.0], [92.8, 1179.0], [92.9, 1183.0], [93.0, 1186.0], [93.1, 1187.0], [93.2, 1188.0], [93.3, 1188.0], [93.4, 1189.0], [93.5, 1189.0], [93.6, 1190.0], [93.7, 1190.0], [93.8, 1192.0], [93.9, 1192.0], [94.0, 1193.0], [94.1, 1194.0], [94.2, 1196.0], [94.3, 1196.0], [94.4, 1196.0], [94.5, 1196.0], [94.6, 1197.0], [94.7, 1197.0], [94.8, 1198.0], [94.9, 1198.0], [95.0, 1199.0], [95.1, 1199.0], [95.2, 1200.0], [95.3, 1201.0], [95.4, 1202.0], [95.5, 1202.0], [95.6, 1203.0], [95.7, 1203.0], [95.8, 1204.0], [95.9, 1205.0], [96.0, 1205.0], [96.1, 1207.0], [96.2, 1207.0], [96.3, 1208.0], [96.4, 1208.0], [96.5, 1209.0], [96.6, 1212.0], [96.7, 1212.0], [96.8, 1214.0], [96.9, 1221.0], [97.0, 1223.0], [97.1, 1239.0], [97.2, 1243.0], [97.3, 1251.0], [97.4, 1298.0], [97.5, 1345.0], [97.6, 1461.0], [97.7, 1477.0], [97.8, 1501.0], [97.9, 1504.0], [98.0, 1509.0], [98.1, 1516.0], [98.2, 1519.0], [98.3, 1520.0], [98.4, 1537.0], [98.5, 1539.0], [98.6, 1555.0], [98.7, 1780.0], [98.8, 1783.0], [98.9, 3191.0], [99.0, 3193.0], [99.1, 3209.0], [99.2, 3210.0], [99.3, 3211.0], [99.4, 3212.0], [99.5, 3217.0], [99.6, 3221.0], [99.7, 3466.0], [99.8, 3499.0], [99.9, 3954.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 703.0, "series": [{"data": [[700.0, 6.0], [3100.0, 2.0], [200.0, 117.0], [3200.0, 6.0], [800.0, 9.0], [3400.0, 2.0], [900.0, 4.0], [3900.0, 1.0], [1100.0, 26.0], [300.0, 2.0], [1200.0, 23.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 9.0], [100.0, 703.0], [400.0, 49.0], [1700.0, 2.0], [500.0, 36.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 871.0, "series": [{"data": [[0.0, 871.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 107.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 22.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.4280000000000002, "minX": 1.7285889E12, "maxY": 2.0773195876288657, "series": [{"data": [[1.72858902E12, 1.5840000000000005], [1.72858914E12, 1.9821428571428577], [1.72858896E12, 1.8279999999999998], [1.72858908E12, 1.4280000000000002], [1.7285889E12, 2.0773195876288657]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72858914E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 219.62899786780392, "minX": 1.0, "maxY": 524.0, "series": [{"data": [[4.0, 498.15], [2.0, 395.1293800539083], [1.0, 219.62899786780392], [5.0, 524.0], [6.0, 245.0], [3.0, 502.01492537313436]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.7239999999999989, 329.6970000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 112.0, "minX": 1.7285889E12, "maxY": 281372.63333333336, "series": [{"data": [[1.72858902E12, 281371.75], [1.72858914E12, 63027.0], [1.72858896E12, 281371.2], [1.72858908E12, 281372.63333333336], [1.7285889E12, 218343.93333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72858902E12, 500.0], [1.72858914E12, 112.0], [1.72858896E12, 500.0], [1.72858908E12, 500.0], [1.7285889E12, 388.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72858914E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 265.36400000000015, "minX": 1.7285889E12, "maxY": 402.1607142857143, "series": [{"data": [[1.72858902E12, 298.0800000000001], [1.72858914E12, 402.1607142857143], [1.72858896E12, 363.392], [1.72858908E12, 265.36400000000015], [1.7285889E12, 389.00515463917543]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72858914E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 217.44799999999995, "minX": 1.7285889E12, "maxY": 351.375, "series": [{"data": [[1.72858902E12, 250.31600000000014], [1.72858914E12, 351.375], [1.72858896E12, 314.60799999999995], [1.72858908E12, 217.44799999999995], [1.7285889E12, 333.2216494845361]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72858914E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 147.37200000000013, "minX": 1.7285889E12, "maxY": 281.74999999999994, "series": [{"data": [[1.72858902E12, 184.5679999999999], [1.72858914E12, 281.74999999999994], [1.72858896E12, 242.43200000000016], [1.72858908E12, 147.37200000000013], [1.7285889E12, 241.03092783505141]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72858914E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 161.0, "minX": 1.7285889E12, "maxY": 3954.0, "series": [{"data": [[1.72858902E12, 3499.0], [1.72858914E12, 3212.0], [1.72858896E12, 3466.0], [1.72858908E12, 3954.0], [1.7285889E12, 3221.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72858902E12, 509.8], [1.72858914E12, 1182.3], [1.72858896E12, 1163.0000000000014], [1.72858908E12, 473.20000000000005], [1.7285889E12, 901.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72858902E12, 1657.5400000000022], [1.72858914E12, 3212.0], [1.72858896E12, 3201.82], [1.72858908E12, 1382.8100000000024], [1.7285889E12, 3217.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72858902E12, 1193.8], [1.72858914E12, 1759.8999999999976], [1.72858896E12, 1207.45], [1.72858908E12, 525.25], [1.7285889E12, 1218.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72858902E12, 164.0], [1.72858914E12, 161.0], [1.72858896E12, 161.0], [1.72858908E12, 163.0], [1.7285889E12, 165.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72858902E12, 186.0], [1.72858914E12, 183.5], [1.72858896E12, 189.0], [1.72858908E12, 184.0], [1.7285889E12, 201.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72858914E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 186.0, "minX": 2.0, "maxY": 364.5, "series": [{"data": [[4.0, 186.0], [2.0, 194.5], [5.0, 189.0], [3.0, 186.0], [6.0, 191.0], [7.0, 364.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 141.0, "minX": 2.0, "maxY": 293.5, "series": [{"data": [[4.0, 141.0], [2.0, 144.0], [5.0, 143.0], [3.0, 142.0], [6.0, 145.0], [7.0, 293.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.7285889E12, "maxY": 4.183333333333334, "series": [{"data": [[1.72858902E12, 4.166666666666667], [1.72858914E12, 0.9], [1.72858896E12, 4.166666666666667], [1.72858908E12, 4.183333333333334], [1.7285889E12, 3.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72858914E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.7285889E12, "maxY": 4.166666666666667, "series": [{"data": [[1.72858902E12, 4.166666666666667], [1.72858914E12, 0.9333333333333333], [1.72858896E12, 4.166666666666667], [1.72858908E12, 4.166666666666667], [1.7285889E12, 3.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72858914E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.7285889E12, "maxY": 4.166666666666667, "series": [{"data": [[1.72858902E12, 4.166666666666667], [1.72858914E12, 0.9333333333333333], [1.72858896E12, 4.166666666666667], [1.72858908E12, 4.166666666666667], [1.7285889E12, 3.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72858914E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.7285889E12, "maxY": 4.166666666666667, "series": [{"data": [[1.72858902E12, 4.166666666666667], [1.72858914E12, 0.9333333333333333], [1.72858896E12, 4.166666666666667], [1.72858908E12, 4.166666666666667], [1.7285889E12, 3.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72858914E12, "title": "Total Transactions Per Second"}},
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

