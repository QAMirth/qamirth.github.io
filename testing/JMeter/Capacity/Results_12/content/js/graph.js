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
        data: {"result": {"minY": 145.0, "minX": 0.0, "maxY": 9277.0, "series": [{"data": [[0.0, 145.0], [0.1, 154.0], [0.2, 155.0], [0.3, 156.0], [0.4, 156.0], [0.5, 157.0], [0.6, 157.0], [0.7, 157.0], [0.8, 158.0], [0.9, 158.0], [1.0, 158.0], [1.1, 158.0], [1.2, 158.0], [1.3, 159.0], [1.4, 159.0], [1.5, 159.0], [1.6, 159.0], [1.7, 159.0], [1.8, 160.0], [1.9, 160.0], [2.0, 160.0], [2.1, 160.0], [2.2, 160.0], [2.3, 160.0], [2.4, 160.0], [2.5, 160.0], [2.6, 160.0], [2.7, 160.0], [2.8, 161.0], [2.9, 161.0], [3.0, 161.0], [3.1, 161.0], [3.2, 161.0], [3.3, 161.0], [3.4, 161.0], [3.5, 161.0], [3.6, 161.0], [3.7, 161.0], [3.8, 161.0], [3.9, 161.0], [4.0, 161.0], [4.1, 162.0], [4.2, 162.0], [4.3, 162.0], [4.4, 162.0], [4.5, 162.0], [4.6, 162.0], [4.7, 162.0], [4.8, 162.0], [4.9, 162.0], [5.0, 162.0], [5.1, 162.0], [5.2, 162.0], [5.3, 162.0], [5.4, 162.0], [5.5, 162.0], [5.6, 162.0], [5.7, 162.0], [5.8, 162.0], [5.9, 163.0], [6.0, 163.0], [6.1, 163.0], [6.2, 163.0], [6.3, 163.0], [6.4, 163.0], [6.5, 163.0], [6.6, 163.0], [6.7, 163.0], [6.8, 163.0], [6.9, 163.0], [7.0, 163.0], [7.1, 163.0], [7.2, 163.0], [7.3, 163.0], [7.4, 163.0], [7.5, 163.0], [7.6, 163.0], [7.7, 163.0], [7.8, 163.0], [7.9, 163.0], [8.0, 164.0], [8.1, 164.0], [8.2, 164.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 164.0], [8.7, 164.0], [8.8, 164.0], [8.9, 164.0], [9.0, 164.0], [9.1, 164.0], [9.2, 164.0], [9.3, 164.0], [9.4, 164.0], [9.5, 164.0], [9.6, 164.0], [9.7, 164.0], [9.8, 164.0], [9.9, 164.0], [10.0, 164.0], [10.1, 164.0], [10.2, 164.0], [10.3, 165.0], [10.4, 165.0], [10.5, 165.0], [10.6, 165.0], [10.7, 165.0], [10.8, 165.0], [10.9, 165.0], [11.0, 165.0], [11.1, 165.0], [11.2, 165.0], [11.3, 165.0], [11.4, 165.0], [11.5, 165.0], [11.6, 165.0], [11.7, 165.0], [11.8, 165.0], [11.9, 165.0], [12.0, 165.0], [12.1, 165.0], [12.2, 165.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 165.0], [12.7, 165.0], [12.8, 165.0], [12.9, 165.0], [13.0, 166.0], [13.1, 166.0], [13.2, 166.0], [13.3, 166.0], [13.4, 166.0], [13.5, 166.0], [13.6, 166.0], [13.7, 166.0], [13.8, 166.0], [13.9, 166.0], [14.0, 166.0], [14.1, 166.0], [14.2, 166.0], [14.3, 166.0], [14.4, 166.0], [14.5, 166.0], [14.6, 166.0], [14.7, 166.0], [14.8, 166.0], [14.9, 166.0], [15.0, 166.0], [15.1, 166.0], [15.2, 166.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 166.0], [16.1, 167.0], [16.2, 167.0], [16.3, 167.0], [16.4, 167.0], [16.5, 167.0], [16.6, 167.0], [16.7, 167.0], [16.8, 167.0], [16.9, 167.0], [17.0, 167.0], [17.1, 167.0], [17.2, 167.0], [17.3, 167.0], [17.4, 167.0], [17.5, 167.0], [17.6, 167.0], [17.7, 167.0], [17.8, 167.0], [17.9, 167.0], [18.0, 167.0], [18.1, 167.0], [18.2, 167.0], [18.3, 167.0], [18.4, 167.0], [18.5, 167.0], [18.6, 167.0], [18.7, 167.0], [18.8, 167.0], [18.9, 167.0], [19.0, 167.0], [19.1, 167.0], [19.2, 168.0], [19.3, 168.0], [19.4, 168.0], [19.5, 168.0], [19.6, 168.0], [19.7, 168.0], [19.8, 168.0], [19.9, 168.0], [20.0, 168.0], [20.1, 168.0], [20.2, 168.0], [20.3, 168.0], [20.4, 168.0], [20.5, 168.0], [20.6, 168.0], [20.7, 168.0], [20.8, 168.0], [20.9, 168.0], [21.0, 168.0], [21.1, 168.0], [21.2, 168.0], [21.3, 168.0], [21.4, 168.0], [21.5, 168.0], [21.6, 168.0], [21.7, 168.0], [21.8, 168.0], [21.9, 168.0], [22.0, 168.0], [22.1, 168.0], [22.2, 168.0], [22.3, 168.0], [22.4, 168.0], [22.5, 168.0], [22.6, 169.0], [22.7, 169.0], [22.8, 169.0], [22.9, 169.0], [23.0, 169.0], [23.1, 169.0], [23.2, 169.0], [23.3, 169.0], [23.4, 169.0], [23.5, 169.0], [23.6, 169.0], [23.7, 169.0], [23.8, 169.0], [23.9, 169.0], [24.0, 169.0], [24.1, 169.0], [24.2, 169.0], [24.3, 169.0], [24.4, 169.0], [24.5, 169.0], [24.6, 169.0], [24.7, 169.0], [24.8, 169.0], [24.9, 169.0], [25.0, 169.0], [25.1, 169.0], [25.2, 169.0], [25.3, 169.0], [25.4, 169.0], [25.5, 169.0], [25.6, 169.0], [25.7, 169.0], [25.8, 169.0], [25.9, 170.0], [26.0, 170.0], [26.1, 170.0], [26.2, 170.0], [26.3, 170.0], [26.4, 170.0], [26.5, 170.0], [26.6, 170.0], [26.7, 170.0], [26.8, 170.0], [26.9, 170.0], [27.0, 170.0], [27.1, 170.0], [27.2, 170.0], [27.3, 170.0], [27.4, 170.0], [27.5, 170.0], [27.6, 170.0], [27.7, 170.0], [27.8, 170.0], [27.9, 170.0], [28.0, 170.0], [28.1, 170.0], [28.2, 170.0], [28.3, 170.0], [28.4, 170.0], [28.5, 170.0], [28.6, 170.0], [28.7, 170.0], [28.8, 170.0], [28.9, 170.0], [29.0, 170.0], [29.1, 170.0], [29.2, 170.0], [29.3, 171.0], [29.4, 171.0], [29.5, 171.0], [29.6, 171.0], [29.7, 171.0], [29.8, 171.0], [29.9, 171.0], [30.0, 171.0], [30.1, 171.0], [30.2, 171.0], [30.3, 171.0], [30.4, 171.0], [30.5, 171.0], [30.6, 171.0], [30.7, 171.0], [30.8, 171.0], [30.9, 171.0], [31.0, 171.0], [31.1, 171.0], [31.2, 171.0], [31.3, 171.0], [31.4, 171.0], [31.5, 171.0], [31.6, 171.0], [31.7, 171.0], [31.8, 171.0], [31.9, 171.0], [32.0, 171.0], [32.1, 171.0], [32.2, 171.0], [32.3, 171.0], [32.4, 171.0], [32.5, 171.0], [32.6, 171.0], [32.7, 172.0], [32.8, 172.0], [32.9, 172.0], [33.0, 172.0], [33.1, 172.0], [33.2, 172.0], [33.3, 172.0], [33.4, 172.0], [33.5, 172.0], [33.6, 172.0], [33.7, 172.0], [33.8, 172.0], [33.9, 172.0], [34.0, 172.0], [34.1, 172.0], [34.2, 172.0], [34.3, 172.0], [34.4, 172.0], [34.5, 172.0], [34.6, 172.0], [34.7, 172.0], [34.8, 172.0], [34.9, 172.0], [35.0, 172.0], [35.1, 172.0], [35.2, 172.0], [35.3, 172.0], [35.4, 172.0], [35.5, 172.0], [35.6, 172.0], [35.7, 172.0], [35.8, 172.0], [35.9, 172.0], [36.0, 172.0], [36.1, 173.0], [36.2, 173.0], [36.3, 173.0], [36.4, 173.0], [36.5, 173.0], [36.6, 173.0], [36.7, 173.0], [36.8, 173.0], [36.9, 173.0], [37.0, 173.0], [37.1, 173.0], [37.2, 173.0], [37.3, 173.0], [37.4, 173.0], [37.5, 173.0], [37.6, 173.0], [37.7, 173.0], [37.8, 173.0], [37.9, 173.0], [38.0, 173.0], [38.1, 173.0], [38.2, 173.0], [38.3, 173.0], [38.4, 173.0], [38.5, 173.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 173.0], [39.0, 173.0], [39.1, 173.0], [39.2, 173.0], [39.3, 174.0], [39.4, 174.0], [39.5, 174.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 174.0], [40.4, 174.0], [40.5, 174.0], [40.6, 174.0], [40.7, 174.0], [40.8, 174.0], [40.9, 174.0], [41.0, 174.0], [41.1, 174.0], [41.2, 174.0], [41.3, 174.0], [41.4, 174.0], [41.5, 174.0], [41.6, 174.0], [41.7, 174.0], [41.8, 174.0], [41.9, 174.0], [42.0, 174.0], [42.1, 174.0], [42.2, 174.0], [42.3, 174.0], [42.4, 175.0], [42.5, 175.0], [42.6, 175.0], [42.7, 175.0], [42.8, 175.0], [42.9, 175.0], [43.0, 175.0], [43.1, 175.0], [43.2, 175.0], [43.3, 175.0], [43.4, 175.0], [43.5, 175.0], [43.6, 175.0], [43.7, 175.0], [43.8, 175.0], [43.9, 175.0], [44.0, 175.0], [44.1, 175.0], [44.2, 175.0], [44.3, 175.0], [44.4, 175.0], [44.5, 175.0], [44.6, 175.0], [44.7, 175.0], [44.8, 175.0], [44.9, 175.0], [45.0, 175.0], [45.1, 175.0], [45.2, 175.0], [45.3, 175.0], [45.4, 175.0], [45.5, 175.0], [45.6, 176.0], [45.7, 176.0], [45.8, 176.0], [45.9, 176.0], [46.0, 176.0], [46.1, 176.0], [46.2, 176.0], [46.3, 176.0], [46.4, 176.0], [46.5, 176.0], [46.6, 176.0], [46.7, 176.0], [46.8, 176.0], [46.9, 176.0], [47.0, 176.0], [47.1, 176.0], [47.2, 176.0], [47.3, 176.0], [47.4, 176.0], [47.5, 176.0], [47.6, 176.0], [47.7, 176.0], [47.8, 176.0], [47.9, 176.0], [48.0, 176.0], [48.1, 176.0], [48.2, 176.0], [48.3, 176.0], [48.4, 176.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 177.0], [48.9, 177.0], [49.0, 177.0], [49.1, 177.0], [49.2, 177.0], [49.3, 177.0], [49.4, 177.0], [49.5, 177.0], [49.6, 177.0], [49.7, 177.0], [49.8, 177.0], [49.9, 177.0], [50.0, 177.0], [50.1, 177.0], [50.2, 177.0], [50.3, 177.0], [50.4, 177.0], [50.5, 177.0], [50.6, 177.0], [50.7, 177.0], [50.8, 177.0], [50.9, 177.0], [51.0, 177.0], [51.1, 177.0], [51.2, 177.0], [51.3, 177.0], [51.4, 177.0], [51.5, 177.0], [51.6, 177.0], [51.7, 177.0], [51.8, 178.0], [51.9, 178.0], [52.0, 178.0], [52.1, 178.0], [52.2, 178.0], [52.3, 178.0], [52.4, 178.0], [52.5, 178.0], [52.6, 178.0], [52.7, 178.0], [52.8, 178.0], [52.9, 178.0], [53.0, 178.0], [53.1, 178.0], [53.2, 178.0], [53.3, 178.0], [53.4, 178.0], [53.5, 178.0], [53.6, 178.0], [53.7, 178.0], [53.8, 178.0], [53.9, 178.0], [54.0, 178.0], [54.1, 178.0], [54.2, 178.0], [54.3, 178.0], [54.4, 178.0], [54.5, 178.0], [54.6, 179.0], [54.7, 179.0], [54.8, 179.0], [54.9, 179.0], [55.0, 179.0], [55.1, 179.0], [55.2, 179.0], [55.3, 179.0], [55.4, 179.0], [55.5, 179.0], [55.6, 179.0], [55.7, 179.0], [55.8, 179.0], [55.9, 179.0], [56.0, 179.0], [56.1, 179.0], [56.2, 179.0], [56.3, 179.0], [56.4, 179.0], [56.5, 179.0], [56.6, 179.0], [56.7, 179.0], [56.8, 179.0], [56.9, 179.0], [57.0, 179.0], [57.1, 179.0], [57.2, 180.0], [57.3, 180.0], [57.4, 180.0], [57.5, 180.0], [57.6, 180.0], [57.7, 180.0], [57.8, 180.0], [57.9, 180.0], [58.0, 180.0], [58.1, 180.0], [58.2, 180.0], [58.3, 180.0], [58.4, 180.0], [58.5, 180.0], [58.6, 180.0], [58.7, 180.0], [58.8, 180.0], [58.9, 180.0], [59.0, 180.0], [59.1, 180.0], [59.2, 180.0], [59.3, 180.0], [59.4, 180.0], [59.5, 180.0], [59.6, 180.0], [59.7, 181.0], [59.8, 181.0], [59.9, 181.0], [60.0, 181.0], [60.1, 181.0], [60.2, 181.0], [60.3, 181.0], [60.4, 181.0], [60.5, 181.0], [60.6, 181.0], [60.7, 181.0], [60.8, 181.0], [60.9, 181.0], [61.0, 181.0], [61.1, 181.0], [61.2, 181.0], [61.3, 181.0], [61.4, 181.0], [61.5, 181.0], [61.6, 181.0], [61.7, 181.0], [61.8, 181.0], [61.9, 182.0], [62.0, 182.0], [62.1, 182.0], [62.2, 182.0], [62.3, 182.0], [62.4, 182.0], [62.5, 182.0], [62.6, 182.0], [62.7, 182.0], [62.8, 182.0], [62.9, 182.0], [63.0, 182.0], [63.1, 182.0], [63.2, 182.0], [63.3, 182.0], [63.4, 182.0], [63.5, 182.0], [63.6, 182.0], [63.7, 182.0], [63.8, 182.0], [63.9, 182.0], [64.0, 183.0], [64.1, 183.0], [64.2, 183.0], [64.3, 183.0], [64.4, 183.0], [64.5, 183.0], [64.6, 183.0], [64.7, 183.0], [64.8, 183.0], [64.9, 183.0], [65.0, 183.0], [65.1, 183.0], [65.2, 183.0], [65.3, 183.0], [65.4, 183.0], [65.5, 183.0], [65.6, 183.0], [65.7, 183.0], [65.8, 184.0], [65.9, 184.0], [66.0, 184.0], [66.1, 184.0], [66.2, 184.0], [66.3, 184.0], [66.4, 184.0], [66.5, 184.0], [66.6, 184.0], [66.7, 184.0], [66.8, 184.0], [66.9, 184.0], [67.0, 184.0], [67.1, 184.0], [67.2, 184.0], [67.3, 185.0], [67.4, 185.0], [67.5, 185.0], [67.6, 185.0], [67.7, 185.0], [67.8, 185.0], [67.9, 185.0], [68.0, 185.0], [68.1, 185.0], [68.2, 185.0], [68.3, 185.0], [68.4, 185.0], [68.5, 185.0], [68.6, 185.0], [68.7, 186.0], [68.8, 186.0], [68.9, 186.0], [69.0, 186.0], [69.1, 186.0], [69.2, 186.0], [69.3, 186.0], [69.4, 186.0], [69.5, 186.0], [69.6, 186.0], [69.7, 186.0], [69.8, 186.0], [69.9, 186.0], [70.0, 187.0], [70.1, 187.0], [70.2, 187.0], [70.3, 187.0], [70.4, 187.0], [70.5, 187.0], [70.6, 187.0], [70.7, 187.0], [70.8, 187.0], [70.9, 187.0], [71.0, 187.0], [71.1, 188.0], [71.2, 188.0], [71.3, 188.0], [71.4, 188.0], [71.5, 188.0], [71.6, 188.0], [71.7, 188.0], [71.8, 188.0], [71.9, 189.0], [72.0, 189.0], [72.1, 189.0], [72.2, 189.0], [72.3, 189.0], [72.4, 189.0], [72.5, 189.0], [72.6, 189.0], [72.7, 189.0], [72.8, 189.0], [72.9, 190.0], [73.0, 190.0], [73.1, 190.0], [73.2, 190.0], [73.3, 190.0], [73.4, 190.0], [73.5, 190.0], [73.6, 190.0], [73.7, 191.0], [73.8, 191.0], [73.9, 191.0], [74.0, 191.0], [74.1, 191.0], [74.2, 191.0], [74.3, 191.0], [74.4, 192.0], [74.5, 192.0], [74.6, 192.0], [74.7, 192.0], [74.8, 192.0], [74.9, 192.0], [75.0, 192.0], [75.1, 193.0], [75.2, 193.0], [75.3, 193.0], [75.4, 193.0], [75.5, 193.0], [75.6, 193.0], [75.7, 194.0], [75.8, 194.0], [75.9, 194.0], [76.0, 194.0], [76.1, 194.0], [76.2, 194.0], [76.3, 194.0], [76.4, 195.0], [76.5, 195.0], [76.6, 195.0], [76.7, 195.0], [76.8, 195.0], [76.9, 196.0], [77.0, 196.0], [77.1, 196.0], [77.2, 196.0], [77.3, 196.0], [77.4, 197.0], [77.5, 197.0], [77.6, 197.0], [77.7, 197.0], [77.8, 197.0], [77.9, 198.0], [78.0, 198.0], [78.1, 198.0], [78.2, 198.0], [78.3, 198.0], [78.4, 199.0], [78.5, 199.0], [78.6, 199.0], [78.7, 199.0], [78.8, 199.0], [78.9, 200.0], [79.0, 200.0], [79.1, 200.0], [79.2, 200.0], [79.3, 201.0], [79.4, 201.0], [79.5, 201.0], [79.6, 201.0], [79.7, 201.0], [79.8, 202.0], [79.9, 202.0], [80.0, 202.0], [80.1, 202.0], [80.2, 203.0], [80.3, 203.0], [80.4, 203.0], [80.5, 204.0], [80.6, 204.0], [80.7, 204.0], [80.8, 204.0], [80.9, 204.0], [81.0, 205.0], [81.1, 205.0], [81.2, 205.0], [81.3, 205.0], [81.4, 206.0], [81.5, 206.0], [81.6, 206.0], [81.7, 207.0], [81.8, 207.0], [81.9, 207.0], [82.0, 208.0], [82.1, 208.0], [82.2, 208.0], [82.3, 208.0], [82.4, 209.0], [82.5, 209.0], [82.6, 209.0], [82.7, 209.0], [82.8, 210.0], [82.9, 210.0], [83.0, 210.0], [83.1, 211.0], [83.2, 211.0], [83.3, 211.0], [83.4, 212.0], [83.5, 212.0], [83.6, 212.0], [83.7, 213.0], [83.8, 213.0], [83.9, 213.0], [84.0, 214.0], [84.1, 214.0], [84.2, 214.0], [84.3, 215.0], [84.4, 215.0], [84.5, 216.0], [84.6, 216.0], [84.7, 216.0], [84.8, 217.0], [84.9, 217.0], [85.0, 218.0], [85.1, 218.0], [85.2, 218.0], [85.3, 219.0], [85.4, 219.0], [85.5, 220.0], [85.6, 220.0], [85.7, 221.0], [85.8, 221.0], [85.9, 222.0], [86.0, 222.0], [86.1, 223.0], [86.2, 223.0], [86.3, 224.0], [86.4, 224.0], [86.5, 225.0], [86.6, 226.0], [86.7, 226.0], [86.8, 227.0], [86.9, 227.0], [87.0, 228.0], [87.1, 228.0], [87.2, 229.0], [87.3, 230.0], [87.4, 230.0], [87.5, 231.0], [87.6, 232.0], [87.7, 233.0], [87.8, 233.0], [87.9, 234.0], [88.0, 235.0], [88.1, 236.0], [88.2, 237.0], [88.3, 238.0], [88.4, 239.0], [88.5, 240.0], [88.6, 241.0], [88.7, 242.0], [88.8, 243.0], [88.9, 244.0], [89.0, 245.0], [89.1, 246.0], [89.2, 247.0], [89.3, 248.0], [89.4, 249.0], [89.5, 250.0], [89.6, 252.0], [89.7, 253.0], [89.8, 255.0], [89.9, 256.0], [90.0, 258.0], [90.1, 260.0], [90.2, 260.0], [90.3, 262.0], [90.4, 263.0], [90.5, 264.0], [90.6, 266.0], [90.7, 267.0], [90.8, 268.0], [90.9, 270.0], [91.0, 271.0], [91.1, 272.0], [91.2, 274.0], [91.3, 275.0], [91.4, 277.0], [91.5, 279.0], [91.6, 281.0], [91.7, 282.0], [91.8, 284.0], [91.9, 286.0], [92.0, 288.0], [92.1, 290.0], [92.2, 292.0], [92.3, 294.0], [92.4, 297.0], [92.5, 300.0], [92.6, 303.0], [92.7, 306.0], [92.8, 309.0], [92.9, 314.0], [93.0, 319.0], [93.1, 326.0], [93.2, 332.0], [93.3, 342.0], [93.4, 350.0], [93.5, 358.0], [93.6, 368.0], [93.7, 378.0], [93.8, 387.0], [93.9, 397.0], [94.0, 408.0], [94.1, 417.0], [94.2, 430.0], [94.3, 438.0], [94.4, 443.0], [94.5, 447.0], [94.6, 452.0], [94.7, 457.0], [94.8, 461.0], [94.9, 468.0], [95.0, 472.0], [95.1, 479.0], [95.2, 489.0], [95.3, 497.0], [95.4, 507.0], [95.5, 514.0], [95.6, 521.0], [95.7, 531.0], [95.8, 540.0], [95.9, 553.0], [96.0, 564.0], [96.1, 577.0], [96.2, 593.0], [96.3, 607.0], [96.4, 620.0], [96.5, 635.0], [96.6, 648.0], [96.7, 660.0], [96.8, 673.0], [96.9, 684.0], [97.0, 697.0], [97.1, 710.0], [97.2, 726.0], [97.3, 738.0], [97.4, 751.0], [97.5, 771.0], [97.6, 781.0], [97.7, 793.0], [97.8, 809.0], [97.9, 827.0], [98.0, 841.0], [98.1, 857.0], [98.2, 880.0], [98.3, 903.0], [98.4, 929.0], [98.5, 971.0], [98.6, 991.0], [98.7, 1029.0], [98.8, 1066.0], [98.9, 1099.0], [99.0, 1151.0], [99.1, 1179.0], [99.2, 1186.0], [99.3, 1222.0], [99.4, 1301.0], [99.5, 1912.0], [99.6, 2922.0], [99.7, 4484.0], [99.8, 5421.0], [99.9, 7168.0], [100.0, 9277.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 19717.0, "series": [{"data": [[600.0, 192.0], [700.0, 179.0], [800.0, 136.0], [900.0, 86.0], [1000.0, 70.0], [1100.0, 88.0], [1200.0, 35.0], [1300.0, 5.0], [1400.0, 5.0], [1500.0, 3.0], [1600.0, 2.0], [1700.0, 5.0], [1800.0, 5.0], [1900.0, 4.0], [2000.0, 6.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 2.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 3.0], [3700.0, 1.0], [3800.0, 2.0], [4000.0, 3.0], [4200.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 3.0], [4600.0, 3.0], [4500.0, 3.0], [4700.0, 2.0], [5100.0, 6.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 3.0], [5200.0, 3.0], [5600.0, 1.0], [5400.0, 2.0], [5500.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6100.0, 2.0], [6200.0, 1.0], [6300.0, 3.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 3.0], [6800.0, 3.0], [6900.0, 1.0], [7000.0, 3.0], [7100.0, 4.0], [7200.0, 2.0], [7400.0, 2.0], [7300.0, 2.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8100.0, 2.0], [8000.0, 1.0], [8200.0, 1.0], [8400.0, 1.0], [8700.0, 2.0], [8300.0, 1.0], [8500.0, 2.0], [8800.0, 2.0], [9200.0, 1.0], [100.0, 19717.0], [200.0, 3403.0], [300.0, 361.0], [400.0, 346.0], [500.0, 236.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 141.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 23829.0, "series": [{"data": [[0.0, 23829.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1030.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 141.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.528290649195957, "minX": 1.72866018E12, "maxY": 40.08000000000001, "series": [{"data": [[1.72866042E12, 5.528290649195957], [1.72866072E12, 5.649249249249259], [1.72866078E12, 5.578255675029863], [1.72866108E12, 5.647780925401324], [1.72866066E12, 5.565844858689112], [1.72866096E12, 9.311258278145706], [1.72866102E12, 11.756578947368434], [1.72866036E12, 5.766506602641058], [1.7286609E12, 5.574174174174173], [1.72866024E12, 5.914663461538471], [1.7286603E12, 5.674488567990382], [1.7286606E12, 5.709580838323359], [1.72866018E12, 40.08000000000001], [1.72866048E12, 5.787605294825528], [1.72866054E12, 5.791143028126873], [1.72866084E12, 5.583083383323336]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72866108E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 172.92787009063463, "minX": 1.0, "maxY": 8122.0, "series": [{"data": [[2.0, 202.31818181818178], [3.0, 187.97647058823526], [4.0, 181.60000000000002], [5.0, 172.92787009063463], [6.0, 195.2664907651717], [7.0, 218.57646559048405], [8.0, 262.6315789473685], [9.0, 306.233333333333], [10.0, 350.9150943396226], [11.0, 382.3688212927757], [12.0, 399.5466101694914], [13.0, 413.54672897196247], [14.0, 465.0673575129534], [15.0, 451.42657342657344], [16.0, 491.9313725490197], [17.0, 649.4935064935065], [18.0, 541.6216216216216], [19.0, 768.5967741935486], [20.0, 847.5573770491801], [21.0, 926.68], [22.0, 1141.9999999999998], [23.0, 672.2142857142858], [24.0, 634.6451612903224], [25.0, 644.8095238095239], [26.0, 1134.4705882352941], [27.0, 356.6666666666667], [28.0, 3771.0], [29.0, 4097.5], [30.0, 3055.6666666666665], [31.0, 534.0], [33.0, 492.0], [32.0, 474.0], [35.0, 3337.666666666667], [34.0, 425.0], [37.0, 1844.5], [36.0, 680.0], [39.0, 663.0], [38.0, 7732.0], [41.0, 2964.0], [40.0, 4953.5], [43.0, 702.0], [42.0, 2426.25], [45.0, 1919.0], [44.0, 5600.0], [47.0, 792.0], [46.0, 7521.0], [49.0, 7355.0], [48.0, 705.0], [51.0, 751.0], [50.0, 1136.0], [53.0, 1736.5], [52.0, 5031.0], [54.0, 2621.6666666666665], [55.0, 5108.0], [57.0, 1707.0], [56.0, 1183.0], [58.0, 489.0], [61.0, 453.0], [60.0, 1317.0], [63.0, 487.0], [62.0, 8122.0], [67.0, 6874.0], [65.0, 6978.0], [64.0, 5421.0], [71.0, 2703.5], [69.0, 3991.0], [68.0, 563.0], [75.0, 641.5], [74.0, 826.0], [73.0, 4523.0], [72.0, 7395.0], [78.0, 982.0], [77.0, 784.3333333333334], [76.0, 841.0], [83.0, 1482.0], [82.0, 5286.5], [81.0, 4267.0], [80.0, 3051.666666666667], [87.0, 3387.6], [86.0, 5049.5], [85.0, 6664.5], [84.0, 4757.666666666667], [91.0, 5798.0], [90.0, 2011.6666666666667], [89.0, 3652.6666666666665], [88.0, 3235.0], [95.0, 1254.0], [94.0, 7040.0], [93.0, 872.0], [92.0, 5384.0], [99.0, 4029.0], [96.0, 3200.0], [98.0, 972.0], [97.0, 6750.0], [103.0, 3707.0], [102.0, 3157.5], [101.0, 3054.75], [100.0, 4172.333333333333], [107.0, 2473.714285714286], [106.0, 2220.25], [105.0, 616.25], [104.0, 1212.888888888889], [111.0, 2854.0], [110.0, 1272.5], [109.0, 2108.6666666666665], [108.0, 3607.666666666667], [114.0, 1189.0], [112.0, 1198.0], [119.0, 3188.5], [118.0, 3477.0], [116.0, 2833.0], [123.0, 826.0], [122.0, 2511.0], [121.0, 702.0], [120.0, 671.0], [127.0, 1118.0], [126.0, 678.0], [125.0, 2549.0], [124.0, 5188.0], [134.0, 472.0], [133.0, 1107.0], [132.0, 2925.0], [130.0, 3448.0], [129.0, 2653.0], [128.0, 2605.0], [142.0, 1092.0], [141.0, 2216.0], [140.0, 1477.0], [138.0, 1112.0], [137.0, 2140.5], [136.0, 5180.0], [151.0, 1057.0], [150.0, 3567.0], [149.0, 2551.0], [146.0, 1097.0], [145.0, 3096.0], [144.0, 3569.0], [155.0, 3507.0], [154.0, 1045.0], [153.0, 532.0], [152.0, 2592.0], [1.0, 200.25000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.14931999999999, 239.45719999999966]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 155.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1200.0, "minX": 1.72866018E12, "maxY": 1889798.5333333334, "series": [{"data": [[1.72866042E12, 1889798.5333333334], [1.72866072E12, 1874055.7833333334], [1.72866078E12, 1884187.2666666666], [1.72866108E12, 1191958.15], [1.72866066E12, 1871800.4], [1.72866096E12, 1869515.9333333333], [1.72866102E12, 1881919.9166666667], [1.72866036E12, 1875143.5833333333], [1.7286609E12, 1873994.6833333333], [1.72866024E12, 1872917.3166666667], [1.7286603E12, 1870616.7166666666], [1.7286606E12, 1879674.8166666667], [1.72866018E12, 675330.15], [1.72866048E12, 1870666.2166666666], [1.72866054E12, 1880797.4333333333], [1.72866084E12, 1876311.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72866042E12, 3358.0], [1.72866072E12, 3330.0], [1.72866078E12, 3348.0], [1.72866108E12, 2118.0], [1.72866066E12, 3326.0], [1.72866096E12, 3322.0], [1.72866102E12, 3344.0], [1.72866036E12, 3332.0], [1.7286609E12, 3330.0], [1.72866024E12, 3328.0], [1.7286603E12, 3324.0], [1.7286606E12, 3340.0], [1.72866018E12, 1200.0], [1.72866048E12, 3324.0], [1.72866054E12, 3342.0], [1.72866084E12, 3334.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72866108E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 182.34723049434177, "minX": 1.72866018E12, "maxY": 1411.5683333333336, "series": [{"data": [[1.72866042E12, 182.34723049434177], [1.72866072E12, 186.69909909909916], [1.72866078E12, 185.03166069295108], [1.72866108E12, 185.94995278564699], [1.72866066E12, 184.09140108238117], [1.72866096E12, 317.2305839855511], [1.72866102E12, 405.27093301435394], [1.72866036E12, 191.29891956782683], [1.7286609E12, 182.86546546546558], [1.72866024E12, 195.5186298076917], [1.7286603E12, 188.24368231046935], [1.7286606E12, 183.10598802395236], [1.72866018E12, 1411.5683333333336], [1.72866048E12, 189.54211793020409], [1.72866054E12, 188.17893476959875], [1.72866084E12, 185.06358728254318]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72866108E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 136.34187016081003, "minX": 1.72866018E12, "maxY": 1236.103333333333, "series": [{"data": [[1.72866042E12, 136.34187016081003], [1.72866072E12, 140.61741741741727], [1.72866078E12, 137.9749103942649], [1.72866108E12, 140.15958451369212], [1.72866066E12, 138.13289236319895], [1.72866096E12, 248.317278747742], [1.72866102E12, 321.22488038277476], [1.72866036E12, 144.2292917166865], [1.7286609E12, 137.1477477477479], [1.72866024E12, 147.62259615384622], [1.7286603E12, 141.70938628158837], [1.7286606E12, 136.81556886227492], [1.72866018E12, 1236.103333333333], [1.72866048E12, 141.81046931407926], [1.72866054E12, 142.0329144225015], [1.72866084E12, 139.65686862627436]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72866108E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 87.9654556283503, "minX": 1.72866018E12, "maxY": 1062.9583333333342, "series": [{"data": [[1.72866042E12, 87.9654556283503], [1.72866072E12, 92.49129129129123], [1.72866078E12, 89.37037037037035], [1.72866108E12, 92.3777148253069], [1.72866066E12, 90.04269392663862], [1.72866096E12, 193.6267308850091], [1.72866102E12, 263.65191387559855], [1.72866036E12, 95.6266506602642], [1.7286609E12, 88.37957957957956], [1.72866024E12, 97.30108173076937], [1.7286603E12, 92.21179302045714], [1.7286606E12, 89.38083832335337], [1.72866018E12, 1062.9583333333342], [1.72866048E12, 92.43802647412747], [1.72866054E12, 92.17773788150782], [1.72866084E12, 91.16856628674266]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72866108E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 145.0, "minX": 1.72866018E12, "maxY": 9277.0, "series": [{"data": [[1.72866042E12, 1173.0], [1.72866072E12, 1514.0], [1.72866078E12, 1183.0], [1.72866108E12, 1193.0], [1.72866066E12, 1206.0], [1.72866096E12, 2790.0], [1.72866102E12, 1716.0], [1.72866036E12, 1214.0], [1.7286609E12, 1244.0], [1.72866024E12, 1418.0], [1.7286603E12, 1185.0], [1.7286606E12, 1184.0], [1.72866018E12, 9277.0], [1.72866048E12, 1290.0], [1.72866054E12, 1242.0], [1.72866084E12, 1233.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72866042E12, 201.0], [1.72866072E12, 196.0], [1.72866078E12, 209.0], [1.72866108E12, 194.0], [1.72866066E12, 200.0], [1.72866096E12, 701.8], [1.72866102E12, 829.7], [1.72866036E12, 210.0], [1.7286609E12, 201.0], [1.72866024E12, 227.0], [1.7286603E12, 207.70000000000005], [1.7286606E12, 202.0], [1.72866018E12, 5142.4], [1.72866048E12, 213.0], [1.72866054E12, 204.0], [1.72866084E12, 201.20000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72866042E12, 334.0000000000007], [1.72866072E12, 499.4399999999987], [1.72866078E12, 447.0], [1.72866108E12, 506.0], [1.72866066E12, 464.1199999999983], [1.72866096E12, 1174.5199999999995], [1.72866102E12, 1224.81], [1.72866036E12, 477.3099999999995], [1.7286609E12, 435.05999999999926], [1.72866024E12, 472.0], [1.7286603E12, 474.9599999999991], [1.7286606E12, 305.02999999999975], [1.72866018E12, 8570.78], [1.72866048E12, 467.3699999999999], [1.72866054E12, 477.55999999999995], [1.72866084E12, 474.5999999999981]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72866042E12, 221.0], [1.72866072E12, 215.69999999999982], [1.72866078E12, 224.0], [1.72866108E12, 211.0], [1.72866066E12, 219.0], [1.72866096E12, 874.7999999999997], [1.72866102E12, 947.6999999999998], [1.72866036E12, 234.64999999999986], [1.7286609E12, 216.0], [1.72866024E12, 270.0], [1.7286603E12, 232.0], [1.7286606E12, 218.0], [1.72866018E12, 6972.799999999993], [1.72866048E12, 239.0], [1.72866054E12, 223.0], [1.72866084E12, 221.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72866042E12, 145.0], [1.72866072E12, 152.0], [1.72866078E12, 150.0], [1.72866108E12, 152.0], [1.72866066E12, 148.0], [1.72866096E12, 153.0], [1.72866102E12, 157.0], [1.72866036E12, 156.0], [1.7286609E12, 153.0], [1.72866024E12, 152.0], [1.7286603E12, 154.0], [1.7286606E12, 152.0], [1.72866018E12, 163.0], [1.72866048E12, 150.0], [1.72866054E12, 152.0], [1.72866084E12, 153.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72866042E12, 174.0], [1.72866072E12, 174.0], [1.72866078E12, 175.0], [1.72866108E12, 174.0], [1.72866066E12, 174.0], [1.72866096E12, 202.0], [1.72866102E12, 278.5], [1.72866036E12, 176.0], [1.7286609E12, 175.0], [1.72866024E12, 179.0], [1.7286603E12, 176.0], [1.7286606E12, 175.0], [1.72866018E12, 404.5], [1.72866048E12, 176.0], [1.72866054E12, 175.0], [1.72866084E12, 175.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72866108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 171.0, "minX": 6.0, "maxY": 1698.5, "series": [{"data": [[32.0, 212.0], [33.0, 265.0], [35.0, 278.0], [34.0, 181.0], [37.0, 277.0], [36.0, 522.0], [38.0, 362.0], [41.0, 1471.0], [40.0, 287.5], [54.0, 483.0], [56.0, 1555.0], [72.0, 1698.5], [6.0, 182.5], [13.0, 174.0], [15.0, 218.0], [16.0, 435.0], [18.0, 171.0], [19.0, 234.0], [20.0, 187.0], [21.0, 196.0], [22.0, 200.5], [23.0, 202.5], [24.0, 182.0], [25.0, 186.0], [26.0, 177.0], [27.0, 175.0], [28.0, 175.0], [29.0, 177.0], [30.0, 175.5], [31.0, 179.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 130.0, "minX": 6.0, "maxY": 1192.5, "series": [{"data": [[32.0, 156.0], [33.0, 212.0], [35.0, 227.0], [34.0, 136.0], [37.0, 222.5], [36.0, 414.5], [38.0, 278.5], [41.0, 883.0], [40.0, 215.5], [54.0, 369.5], [56.0, 1038.5], [72.0, 1192.5], [6.0, 139.0], [13.0, 130.0], [15.0, 148.0], [16.0, 350.5], [18.0, 130.0], [19.0, 167.0], [20.0, 147.5], [21.0, 146.0], [22.0, 145.5], [23.0, 151.0], [24.0, 137.0], [25.0, 139.5], [26.0, 134.0], [27.0, 132.0], [28.0, 132.0], [29.0, 133.0], [30.0, 133.0], [31.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.1, "minX": 1.72866018E12, "maxY": 27.983333333333334, "series": [{"data": [[1.72866042E12, 27.983333333333334], [1.72866072E12, 27.766666666666666], [1.72866078E12, 27.883333333333333], [1.72866108E12, 17.55], [1.72866066E12, 27.75], [1.72866096E12, 27.783333333333335], [1.72866102E12, 27.783333333333335], [1.72866036E12, 27.766666666666666], [1.7286609E12, 27.75], [1.72866024E12, 27.7], [1.7286603E12, 27.716666666666665], [1.7286606E12, 27.766666666666666], [1.72866018E12, 10.1], [1.72866048E12, 27.716666666666665], [1.72866054E12, 27.866666666666667], [1.72866084E12, 27.783333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72866108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72866018E12, "maxY": 27.983333333333334, "series": [{"data": [[1.72866042E12, 27.983333333333334], [1.72866072E12, 27.75], [1.72866078E12, 27.9], [1.72866108E12, 17.65], [1.72866066E12, 27.716666666666665], [1.72866096E12, 27.683333333333334], [1.72866102E12, 27.866666666666667], [1.72866036E12, 27.766666666666666], [1.7286609E12, 27.75], [1.72866024E12, 27.733333333333334], [1.7286603E12, 27.7], [1.7286606E12, 27.833333333333332], [1.72866018E12, 10.0], [1.72866048E12, 27.7], [1.72866054E12, 27.85], [1.72866084E12, 27.783333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72866108E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72866018E12, "maxY": 27.983333333333334, "series": [{"data": [[1.72866042E12, 27.983333333333334], [1.72866072E12, 27.75], [1.72866078E12, 27.9], [1.72866108E12, 17.65], [1.72866066E12, 27.716666666666665], [1.72866096E12, 27.683333333333334], [1.72866102E12, 27.866666666666667], [1.72866036E12, 27.766666666666666], [1.7286609E12, 27.75], [1.72866024E12, 27.733333333333334], [1.7286603E12, 27.7], [1.7286606E12, 27.833333333333332], [1.72866018E12, 10.0], [1.72866048E12, 27.7], [1.72866054E12, 27.85], [1.72866084E12, 27.783333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72866108E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72866018E12, "maxY": 27.983333333333334, "series": [{"data": [[1.72866042E12, 27.983333333333334], [1.72866072E12, 27.75], [1.72866078E12, 27.9], [1.72866108E12, 17.65], [1.72866066E12, 27.716666666666665], [1.72866096E12, 27.683333333333334], [1.72866102E12, 27.866666666666667], [1.72866036E12, 27.766666666666666], [1.7286609E12, 27.75], [1.72866024E12, 27.733333333333334], [1.7286603E12, 27.7], [1.7286606E12, 27.833333333333332], [1.72866018E12, 10.0], [1.72866048E12, 27.7], [1.72866054E12, 27.85], [1.72866084E12, 27.783333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72866108E12, "title": "Total Transactions Per Second"}},
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

