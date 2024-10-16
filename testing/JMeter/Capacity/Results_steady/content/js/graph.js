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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 243427.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 1.0], [0.7, 2.0], [0.8, 152.0], [0.9, 154.0], [1.0, 155.0], [1.1, 155.0], [1.2, 156.0], [1.3, 156.0], [1.4, 156.0], [1.5, 157.0], [1.6, 157.0], [1.7, 157.0], [1.8, 158.0], [1.9, 158.0], [2.0, 158.0], [2.1, 158.0], [2.2, 158.0], [2.3, 158.0], [2.4, 159.0], [2.5, 159.0], [2.6, 159.0], [2.7, 159.0], [2.8, 159.0], [2.9, 159.0], [3.0, 159.0], [3.1, 159.0], [3.2, 160.0], [3.3, 160.0], [3.4, 160.0], [3.5, 160.0], [3.6, 160.0], [3.7, 160.0], [3.8, 160.0], [3.9, 160.0], [4.0, 160.0], [4.1, 160.0], [4.2, 160.0], [4.3, 161.0], [4.4, 161.0], [4.5, 161.0], [4.6, 161.0], [4.7, 161.0], [4.8, 161.0], [4.9, 161.0], [5.0, 161.0], [5.1, 161.0], [5.2, 161.0], [5.3, 161.0], [5.4, 161.0], [5.5, 161.0], [5.6, 162.0], [5.7, 162.0], [5.8, 162.0], [5.9, 162.0], [6.0, 162.0], [6.1, 162.0], [6.2, 162.0], [6.3, 162.0], [6.4, 162.0], [6.5, 162.0], [6.6, 162.0], [6.7, 162.0], [6.8, 162.0], [6.9, 162.0], [7.0, 162.0], [7.1, 162.0], [7.2, 162.0], [7.3, 163.0], [7.4, 163.0], [7.5, 163.0], [7.6, 163.0], [7.7, 163.0], [7.8, 163.0], [7.9, 163.0], [8.0, 163.0], [8.1, 163.0], [8.2, 163.0], [8.3, 163.0], [8.4, 163.0], [8.5, 163.0], [8.6, 163.0], [8.7, 163.0], [8.8, 163.0], [8.9, 163.0], [9.0, 163.0], [9.1, 163.0], [9.2, 163.0], [9.3, 163.0], [9.4, 164.0], [9.5, 164.0], [9.6, 164.0], [9.7, 164.0], [9.8, 164.0], [9.9, 164.0], [10.0, 164.0], [10.1, 164.0], [10.2, 164.0], [10.3, 164.0], [10.4, 164.0], [10.5, 164.0], [10.6, 164.0], [10.7, 164.0], [10.8, 164.0], [10.9, 164.0], [11.0, 164.0], [11.1, 164.0], [11.2, 164.0], [11.3, 164.0], [11.4, 164.0], [11.5, 164.0], [11.6, 164.0], [11.7, 164.0], [11.8, 164.0], [11.9, 164.0], [12.0, 165.0], [12.1, 165.0], [12.2, 165.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 165.0], [12.7, 165.0], [12.8, 165.0], [12.9, 165.0], [13.0, 165.0], [13.1, 165.0], [13.2, 165.0], [13.3, 165.0], [13.4, 165.0], [13.5, 165.0], [13.6, 165.0], [13.7, 165.0], [13.8, 165.0], [13.9, 165.0], [14.0, 165.0], [14.1, 165.0], [14.2, 165.0], [14.3, 165.0], [14.4, 165.0], [14.5, 165.0], [14.6, 165.0], [14.7, 165.0], [14.8, 165.0], [14.9, 166.0], [15.0, 166.0], [15.1, 166.0], [15.2, 166.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 166.0], [16.1, 166.0], [16.2, 166.0], [16.3, 166.0], [16.4, 166.0], [16.5, 166.0], [16.6, 166.0], [16.7, 166.0], [16.8, 166.0], [16.9, 166.0], [17.0, 166.0], [17.1, 166.0], [17.2, 166.0], [17.3, 166.0], [17.4, 166.0], [17.5, 166.0], [17.6, 166.0], [17.7, 166.0], [17.8, 166.0], [17.9, 166.0], [18.0, 166.0], [18.1, 166.0], [18.2, 167.0], [18.3, 167.0], [18.4, 167.0], [18.5, 167.0], [18.6, 167.0], [18.7, 167.0], [18.8, 167.0], [18.9, 167.0], [19.0, 167.0], [19.1, 167.0], [19.2, 167.0], [19.3, 167.0], [19.4, 167.0], [19.5, 167.0], [19.6, 167.0], [19.7, 167.0], [19.8, 167.0], [19.9, 167.0], [20.0, 167.0], [20.1, 167.0], [20.2, 167.0], [20.3, 167.0], [20.4, 167.0], [20.5, 167.0], [20.6, 167.0], [20.7, 167.0], [20.8, 167.0], [20.9, 167.0], [21.0, 167.0], [21.1, 167.0], [21.2, 167.0], [21.3, 167.0], [21.4, 167.0], [21.5, 167.0], [21.6, 167.0], [21.7, 167.0], [21.8, 168.0], [21.9, 168.0], [22.0, 168.0], [22.1, 168.0], [22.2, 168.0], [22.3, 168.0], [22.4, 168.0], [22.5, 168.0], [22.6, 168.0], [22.7, 168.0], [22.8, 168.0], [22.9, 168.0], [23.0, 168.0], [23.1, 168.0], [23.2, 168.0], [23.3, 168.0], [23.4, 168.0], [23.5, 168.0], [23.6, 168.0], [23.7, 168.0], [23.8, 168.0], [23.9, 168.0], [24.0, 168.0], [24.1, 168.0], [24.2, 168.0], [24.3, 168.0], [24.4, 168.0], [24.5, 168.0], [24.6, 168.0], [24.7, 168.0], [24.8, 168.0], [24.9, 168.0], [25.0, 168.0], [25.1, 168.0], [25.2, 168.0], [25.3, 168.0], [25.4, 168.0], [25.5, 169.0], [25.6, 169.0], [25.7, 169.0], [25.8, 169.0], [25.9, 169.0], [26.0, 169.0], [26.1, 169.0], [26.2, 169.0], [26.3, 169.0], [26.4, 169.0], [26.5, 169.0], [26.6, 169.0], [26.7, 169.0], [26.8, 169.0], [26.9, 169.0], [27.0, 169.0], [27.1, 169.0], [27.2, 169.0], [27.3, 169.0], [27.4, 169.0], [27.5, 169.0], [27.6, 169.0], [27.7, 169.0], [27.8, 169.0], [27.9, 169.0], [28.0, 169.0], [28.1, 169.0], [28.2, 169.0], [28.3, 169.0], [28.4, 169.0], [28.5, 169.0], [28.6, 169.0], [28.7, 169.0], [28.8, 169.0], [28.9, 169.0], [29.0, 169.0], [29.1, 169.0], [29.2, 169.0], [29.3, 169.0], [29.4, 170.0], [29.5, 170.0], [29.6, 170.0], [29.7, 170.0], [29.8, 170.0], [29.9, 170.0], [30.0, 170.0], [30.1, 170.0], [30.2, 170.0], [30.3, 170.0], [30.4, 170.0], [30.5, 170.0], [30.6, 170.0], [30.7, 170.0], [30.8, 170.0], [30.9, 170.0], [31.0, 170.0], [31.1, 170.0], [31.2, 170.0], [31.3, 170.0], [31.4, 170.0], [31.5, 170.0], [31.6, 170.0], [31.7, 170.0], [31.8, 170.0], [31.9, 170.0], [32.0, 170.0], [32.1, 170.0], [32.2, 170.0], [32.3, 170.0], [32.4, 170.0], [32.5, 170.0], [32.6, 170.0], [32.7, 170.0], [32.8, 170.0], [32.9, 170.0], [33.0, 170.0], [33.1, 170.0], [33.2, 171.0], [33.3, 171.0], [33.4, 171.0], [33.5, 171.0], [33.6, 171.0], [33.7, 171.0], [33.8, 171.0], [33.9, 171.0], [34.0, 171.0], [34.1, 171.0], [34.2, 171.0], [34.3, 171.0], [34.4, 171.0], [34.5, 171.0], [34.6, 171.0], [34.7, 171.0], [34.8, 171.0], [34.9, 171.0], [35.0, 171.0], [35.1, 171.0], [35.2, 171.0], [35.3, 171.0], [35.4, 171.0], [35.5, 171.0], [35.6, 171.0], [35.7, 171.0], [35.8, 171.0], [35.9, 171.0], [36.0, 171.0], [36.1, 171.0], [36.2, 171.0], [36.3, 171.0], [36.4, 171.0], [36.5, 171.0], [36.6, 171.0], [36.7, 171.0], [36.8, 171.0], [36.9, 171.0], [37.0, 171.0], [37.1, 171.0], [37.2, 172.0], [37.3, 172.0], [37.4, 172.0], [37.5, 172.0], [37.6, 172.0], [37.7, 172.0], [37.8, 172.0], [37.9, 172.0], [38.0, 172.0], [38.1, 172.0], [38.2, 172.0], [38.3, 172.0], [38.4, 172.0], [38.5, 172.0], [38.6, 172.0], [38.7, 172.0], [38.8, 172.0], [38.9, 172.0], [39.0, 172.0], [39.1, 172.0], [39.2, 172.0], [39.3, 172.0], [39.4, 172.0], [39.5, 172.0], [39.6, 172.0], [39.7, 172.0], [39.8, 172.0], [39.9, 172.0], [40.0, 172.0], [40.1, 172.0], [40.2, 172.0], [40.3, 172.0], [40.4, 172.0], [40.5, 172.0], [40.6, 172.0], [40.7, 172.0], [40.8, 172.0], [40.9, 172.0], [41.0, 172.0], [41.1, 172.0], [41.2, 173.0], [41.3, 173.0], [41.4, 173.0], [41.5, 173.0], [41.6, 173.0], [41.7, 173.0], [41.8, 173.0], [41.9, 173.0], [42.0, 173.0], [42.1, 173.0], [42.2, 173.0], [42.3, 173.0], [42.4, 173.0], [42.5, 173.0], [42.6, 173.0], [42.7, 173.0], [42.8, 173.0], [42.9, 173.0], [43.0, 173.0], [43.1, 173.0], [43.2, 173.0], [43.3, 173.0], [43.4, 173.0], [43.5, 173.0], [43.6, 173.0], [43.7, 173.0], [43.8, 173.0], [43.9, 173.0], [44.0, 173.0], [44.1, 173.0], [44.2, 173.0], [44.3, 173.0], [44.4, 173.0], [44.5, 173.0], [44.6, 173.0], [44.7, 173.0], [44.8, 173.0], [44.9, 173.0], [45.0, 174.0], [45.1, 174.0], [45.2, 174.0], [45.3, 174.0], [45.4, 174.0], [45.5, 174.0], [45.6, 174.0], [45.7, 174.0], [45.8, 174.0], [45.9, 174.0], [46.0, 174.0], [46.1, 174.0], [46.2, 174.0], [46.3, 174.0], [46.4, 174.0], [46.5, 174.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 174.0], [47.3, 174.0], [47.4, 174.0], [47.5, 174.0], [47.6, 174.0], [47.7, 174.0], [47.8, 174.0], [47.9, 174.0], [48.0, 174.0], [48.1, 174.0], [48.2, 174.0], [48.3, 174.0], [48.4, 174.0], [48.5, 174.0], [48.6, 174.0], [48.7, 174.0], [48.8, 175.0], [48.9, 175.0], [49.0, 175.0], [49.1, 175.0], [49.2, 175.0], [49.3, 175.0], [49.4, 175.0], [49.5, 175.0], [49.6, 175.0], [49.7, 175.0], [49.8, 175.0], [49.9, 175.0], [50.0, 175.0], [50.1, 175.0], [50.2, 175.0], [50.3, 175.0], [50.4, 175.0], [50.5, 175.0], [50.6, 175.0], [50.7, 175.0], [50.8, 175.0], [50.9, 175.0], [51.0, 175.0], [51.1, 175.0], [51.2, 175.0], [51.3, 175.0], [51.4, 175.0], [51.5, 175.0], [51.6, 175.0], [51.7, 175.0], [51.8, 175.0], [51.9, 175.0], [52.0, 175.0], [52.1, 175.0], [52.2, 176.0], [52.3, 176.0], [52.4, 176.0], [52.5, 176.0], [52.6, 176.0], [52.7, 176.0], [52.8, 176.0], [52.9, 176.0], [53.0, 176.0], [53.1, 176.0], [53.2, 176.0], [53.3, 176.0], [53.4, 176.0], [53.5, 176.0], [53.6, 176.0], [53.7, 176.0], [53.8, 176.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 176.0], [54.8, 176.0], [54.9, 176.0], [55.0, 176.0], [55.1, 176.0], [55.2, 176.0], [55.3, 176.0], [55.4, 176.0], [55.5, 177.0], [55.6, 177.0], [55.7, 177.0], [55.8, 177.0], [55.9, 177.0], [56.0, 177.0], [56.1, 177.0], [56.2, 177.0], [56.3, 177.0], [56.4, 177.0], [56.5, 177.0], [56.6, 177.0], [56.7, 177.0], [56.8, 177.0], [56.9, 177.0], [57.0, 177.0], [57.1, 177.0], [57.2, 177.0], [57.3, 177.0], [57.4, 177.0], [57.5, 177.0], [57.6, 177.0], [57.7, 177.0], [57.8, 177.0], [57.9, 177.0], [58.0, 177.0], [58.1, 177.0], [58.2, 177.0], [58.3, 177.0], [58.4, 177.0], [58.5, 177.0], [58.6, 178.0], [58.7, 178.0], [58.8, 178.0], [58.9, 178.0], [59.0, 178.0], [59.1, 178.0], [59.2, 178.0], [59.3, 178.0], [59.4, 178.0], [59.5, 178.0], [59.6, 178.0], [59.7, 178.0], [59.8, 178.0], [59.9, 178.0], [60.0, 178.0], [60.1, 178.0], [60.2, 178.0], [60.3, 178.0], [60.4, 178.0], [60.5, 178.0], [60.6, 178.0], [60.7, 178.0], [60.8, 178.0], [60.9, 178.0], [61.0, 178.0], [61.1, 178.0], [61.2, 178.0], [61.3, 178.0], [61.4, 178.0], [61.5, 179.0], [61.6, 179.0], [61.7, 179.0], [61.8, 179.0], [61.9, 179.0], [62.0, 179.0], [62.1, 179.0], [62.2, 179.0], [62.3, 179.0], [62.4, 179.0], [62.5, 179.0], [62.6, 179.0], [62.7, 179.0], [62.8, 179.0], [62.9, 179.0], [63.0, 179.0], [63.1, 179.0], [63.2, 179.0], [63.3, 179.0], [63.4, 179.0], [63.5, 179.0], [63.6, 179.0], [63.7, 179.0], [63.8, 179.0], [63.9, 179.0], [64.0, 179.0], [64.1, 179.0], [64.2, 180.0], [64.3, 180.0], [64.4, 180.0], [64.5, 180.0], [64.6, 180.0], [64.7, 180.0], [64.8, 180.0], [64.9, 180.0], [65.0, 180.0], [65.1, 180.0], [65.2, 180.0], [65.3, 180.0], [65.4, 180.0], [65.5, 180.0], [65.6, 180.0], [65.7, 180.0], [65.8, 180.0], [65.9, 180.0], [66.0, 180.0], [66.1, 180.0], [66.2, 180.0], [66.3, 180.0], [66.4, 180.0], [66.5, 180.0], [66.6, 180.0], [66.7, 181.0], [66.8, 181.0], [66.9, 181.0], [67.0, 181.0], [67.1, 181.0], [67.2, 181.0], [67.3, 181.0], [67.4, 181.0], [67.5, 181.0], [67.6, 181.0], [67.7, 181.0], [67.8, 181.0], [67.9, 181.0], [68.0, 181.0], [68.1, 181.0], [68.2, 181.0], [68.3, 181.0], [68.4, 181.0], [68.5, 181.0], [68.6, 181.0], [68.7, 181.0], [68.8, 181.0], [68.9, 181.0], [69.0, 182.0], [69.1, 182.0], [69.2, 182.0], [69.3, 182.0], [69.4, 182.0], [69.5, 182.0], [69.6, 182.0], [69.7, 182.0], [69.8, 182.0], [69.9, 182.0], [70.0, 182.0], [70.1, 182.0], [70.2, 182.0], [70.3, 182.0], [70.4, 182.0], [70.5, 182.0], [70.6, 182.0], [70.7, 182.0], [70.8, 182.0], [70.9, 182.0], [71.0, 183.0], [71.1, 183.0], [71.2, 183.0], [71.3, 183.0], [71.4, 183.0], [71.5, 183.0], [71.6, 183.0], [71.7, 183.0], [71.8, 183.0], [71.9, 183.0], [72.0, 183.0], [72.1, 183.0], [72.2, 183.0], [72.3, 183.0], [72.4, 183.0], [72.5, 183.0], [72.6, 183.0], [72.7, 183.0], [72.8, 183.0], [72.9, 184.0], [73.0, 184.0], [73.1, 184.0], [73.2, 184.0], [73.3, 184.0], [73.4, 184.0], [73.5, 184.0], [73.6, 184.0], [73.7, 184.0], [73.8, 184.0], [73.9, 184.0], [74.0, 184.0], [74.1, 184.0], [74.2, 184.0], [74.3, 184.0], [74.4, 184.0], [74.5, 184.0], [74.6, 185.0], [74.7, 185.0], [74.8, 185.0], [74.9, 185.0], [75.0, 185.0], [75.1, 185.0], [75.2, 185.0], [75.3, 185.0], [75.4, 185.0], [75.5, 185.0], [75.6, 185.0], [75.7, 185.0], [75.8, 185.0], [75.9, 185.0], [76.0, 185.0], [76.1, 186.0], [76.2, 186.0], [76.3, 186.0], [76.4, 186.0], [76.5, 186.0], [76.6, 186.0], [76.7, 186.0], [76.8, 186.0], [76.9, 186.0], [77.0, 186.0], [77.1, 186.0], [77.2, 186.0], [77.3, 186.0], [77.4, 186.0], [77.5, 187.0], [77.6, 187.0], [77.7, 187.0], [77.8, 187.0], [77.9, 187.0], [78.0, 187.0], [78.1, 187.0], [78.2, 187.0], [78.3, 187.0], [78.4, 187.0], [78.5, 187.0], [78.6, 187.0], [78.7, 187.0], [78.8, 188.0], [78.9, 188.0], [79.0, 188.0], [79.1, 188.0], [79.2, 188.0], [79.3, 188.0], [79.4, 188.0], [79.5, 188.0], [79.6, 188.0], [79.7, 188.0], [79.8, 188.0], [79.9, 188.0], [80.0, 189.0], [80.1, 189.0], [80.2, 189.0], [80.3, 189.0], [80.4, 189.0], [80.5, 189.0], [80.6, 189.0], [80.7, 189.0], [80.8, 189.0], [80.9, 189.0], [81.0, 189.0], [81.1, 190.0], [81.2, 190.0], [81.3, 190.0], [81.4, 190.0], [81.5, 190.0], [81.6, 190.0], [81.7, 190.0], [81.8, 190.0], [81.9, 190.0], [82.0, 190.0], [82.1, 191.0], [82.2, 191.0], [82.3, 191.0], [82.4, 191.0], [82.5, 191.0], [82.6, 191.0], [82.7, 191.0], [82.8, 191.0], [82.9, 191.0], [83.0, 192.0], [83.1, 192.0], [83.2, 192.0], [83.3, 192.0], [83.4, 192.0], [83.5, 192.0], [83.6, 192.0], [83.7, 192.0], [83.8, 192.0], [83.9, 193.0], [84.0, 193.0], [84.1, 193.0], [84.2, 193.0], [84.3, 193.0], [84.4, 193.0], [84.5, 193.0], [84.6, 193.0], [84.7, 194.0], [84.8, 194.0], [84.9, 194.0], [85.0, 194.0], [85.1, 194.0], [85.2, 194.0], [85.3, 194.0], [85.4, 195.0], [85.5, 195.0], [85.6, 195.0], [85.7, 195.0], [85.8, 195.0], [85.9, 195.0], [86.0, 195.0], [86.1, 196.0], [86.2, 196.0], [86.3, 196.0], [86.4, 196.0], [86.5, 196.0], [86.6, 196.0], [86.7, 196.0], [86.8, 197.0], [86.9, 197.0], [87.0, 197.0], [87.1, 197.0], [87.2, 197.0], [87.3, 197.0], [87.4, 198.0], [87.5, 198.0], [87.6, 198.0], [87.7, 198.0], [87.8, 198.0], [87.9, 198.0], [88.0, 199.0], [88.1, 199.0], [88.2, 199.0], [88.3, 199.0], [88.4, 199.0], [88.5, 200.0], [88.6, 200.0], [88.7, 200.0], [88.8, 200.0], [88.9, 200.0], [89.0, 201.0], [89.1, 201.0], [89.2, 201.0], [89.3, 201.0], [89.4, 201.0], [89.5, 202.0], [89.6, 202.0], [89.7, 202.0], [89.8, 202.0], [89.9, 202.0], [90.0, 203.0], [90.1, 203.0], [90.2, 203.0], [90.3, 203.0], [90.4, 204.0], [90.5, 204.0], [90.6, 204.0], [90.7, 204.0], [90.8, 205.0], [90.9, 205.0], [91.0, 205.0], [91.1, 205.0], [91.2, 206.0], [91.3, 206.0], [91.4, 206.0], [91.5, 207.0], [91.6, 207.0], [91.7, 207.0], [91.8, 207.0], [91.9, 208.0], [92.0, 208.0], [92.1, 208.0], [92.2, 208.0], [92.3, 209.0], [92.4, 209.0], [92.5, 209.0], [92.6, 210.0], [92.7, 210.0], [92.8, 210.0], [92.9, 211.0], [93.0, 211.0], [93.1, 212.0], [93.2, 212.0], [93.3, 212.0], [93.4, 213.0], [93.5, 213.0], [93.6, 214.0], [93.7, 214.0], [93.8, 214.0], [93.9, 215.0], [94.0, 215.0], [94.1, 216.0], [94.2, 216.0], [94.3, 217.0], [94.4, 217.0], [94.5, 218.0], [94.6, 218.0], [94.7, 219.0], [94.8, 219.0], [94.9, 220.0], [95.0, 221.0], [95.1, 222.0], [95.2, 222.0], [95.3, 223.0], [95.4, 224.0], [95.5, 224.0], [95.6, 225.0], [95.7, 226.0], [95.8, 227.0], [95.9, 227.0], [96.0, 228.0], [96.1, 229.0], [96.2, 230.0], [96.3, 231.0], [96.4, 233.0], [96.5, 234.0], [96.6, 235.0], [96.7, 236.0], [96.8, 238.0], [96.9, 239.0], [97.0, 241.0], [97.1, 242.0], [97.2, 244.0], [97.3, 246.0], [97.4, 249.0], [97.5, 251.0], [97.6, 254.0], [97.7, 257.0], [97.8, 260.0], [97.9, 263.0], [98.0, 267.0], [98.1, 270.0], [98.2, 276.0], [98.3, 281.0], [98.4, 286.0], [98.5, 293.0], [98.6, 302.0], [98.7, 314.0], [98.8, 327.0], [98.9, 345.0], [99.0, 363.0], [99.1, 386.0], [99.2, 424.0], [99.3, 461.0], [99.4, 490.0], [99.5, 589.0], [99.6, 1107.0], [99.7, 1184.0], [99.8, 1222.0], [99.9, 1596.0], [100.0, 243427.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 72377.0, "series": [{"data": [[0.0, 599.0], [600.0, 38.0], [700.0, 16.0], [800.0, 4.0], [900.0, 11.0], [243400.0, 1.0], [1000.0, 5.0], [1100.0, 135.0], [1200.0, 53.0], [1300.0, 44.0], [21400.0, 1.0], [21100.0, 1.0], [1400.0, 7.0], [1500.0, 11.0], [100.0, 72377.0], [1600.0, 11.0], [1700.0, 5.0], [1800.0, 1.0], [2100.0, 2.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [3100.0, 1.0], [200.0, 8358.0], [3300.0, 1.0], [3400.0, 1.0], [300.0, 481.0], [5100.0, 10.0], [5200.0, 4.0], [5400.0, 4.0], [5500.0, 4.0], [5700.0, 2.0], [5800.0, 2.0], [6000.0, 9.0], [5900.0, 8.0], [400.0, 218.0], [115500.0, 2.0], [121000.0, 1.0], [121700.0, 1.0], [121800.0, 1.0], [121900.0, 1.0], [122100.0, 1.0], [122400.0, 1.0], [500.0, 73.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 243400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 42.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 81434.0, "series": [{"data": [[0.0, 81434.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 386.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 42.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 650.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.72903188E12, "maxY": 50.0, "series": [{"data": [[1.7290323E12, 50.0], [1.7290329E12, 50.0], [1.7290332E12, 50.0], [1.72903188E12, 1.0], [1.7290335E12, 50.0], [1.72903248E12, 50.0], [1.72903218E12, 46.03704939919887], [1.72903278E12, 50.0], [1.72903308E12, 50.0], [1.72903338E12, 50.0], [1.72903368E12, 49.56050955414014], [1.72903236E12, 50.0], [1.72903206E12, 26.106368789596527], [1.72903266E12, 50.0], [1.72903296E12, 50.0], [1.72903326E12, 50.0], [1.72903356E12, 50.0], [1.72903224E12, 50.0], [1.72903194E12, 7.373695198329853], [1.72903254E12, 50.0], [1.72903284E12, 50.0], [1.72903314E12, 50.0], [1.72903344E12, 50.0], [1.72903212E12, 36.124958457959494], [1.72903242E12, 50.0], [1.72903272E12, 50.0], [1.72903302E12, 50.0], [1.72903332E12, 50.0], [1.729032E12, 16.109853528628502], [1.72903362E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903368E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 170.2657807308971, "minX": 1.0, "maxY": 248.5, "series": [{"data": [[2.0, 184.38461538461547], [3.0, 180.01], [4.0, 178.34328358208953], [5.0, 188.85443037974682], [6.0, 177.32352941176467], [7.0, 182.10000000000002], [8.0, 181.40530303030295], [9.0, 174.69932432432424], [10.0, 196.23381294964022], [11.0, 176.70163934426242], [12.0, 172.8006644518272], [13.0, 175.79069767441862], [14.0, 187.29865771812067], [15.0, 185.7281879194632], [16.0, 188.95065789473685], [17.0, 175.06885245901637], [18.0, 170.2657807308971], [19.0, 177.3133333333333], [20.0, 174.37541528239208], [21.0, 176.00660066006603], [22.0, 176.1266666666666], [23.0, 200.47781569965866], [24.0, 179.41987179487174], [25.0, 176.02666666666673], [26.0, 178.07308970099658], [27.0, 183.73089700996687], [28.0, 174.64802631578948], [29.0, 171.89333333333335], [30.0, 246.98281786941587], [31.0, 192.1461038961039], [32.0, 178.09863945578232], [33.0, 180.75666666666672], [34.0, 178.43790849673195], [35.0, 175.08116883116884], [36.0, 181.67796610169486], [37.0, 201.62666666666658], [38.0, 179.37953795379553], [39.0, 175.042345276873], [40.0, 187.37586206896563], [41.0, 182.44968553459114], [42.0, 188.9664429530201], [43.0, 176.50165016501654], [44.0, 179.8664495114007], [45.0, 177.21254355400688], [46.0, 177.18709677419335], [47.0, 182.195286195286], [48.0, 178.39158576051778], [49.0, 174.1465798045602], [50.0, 206.3944313191197], [1.0, 248.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.23643833624172, 202.40540769827683]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.0, "minX": 1.72903188E12, "maxY": 3386686.7666666666, "series": [{"data": [[1.7290323E12, 3376594.85], [1.7290329E12, 3375449.966666667], [1.7290332E12, 3368645.9833333334], [1.72903188E12, 12380.166666666666], [1.7290335E12, 3379972.6333333333], [1.72903248E12, 3376592.95], [1.72903218E12, 3372073.75], [1.72903278E12, 3334907.183333333], [1.72903308E12, 3369820.15], [1.72903338E12, 3372077.6666666665], [1.72903368E12, 3180745.283333333], [1.72903236E12, 3376597.2], [1.72903206E12, 3375425.75], [1.72903266E12, 1413681.3], [1.72903296E12, 3370960.3833333333], [1.72903326E12, 3377679.6666666665], [1.72903356E12, 3370971.0], [1.72903224E12, 3376589.35], [1.72903194E12, 2156439.0], [1.72903254E12, 1169307.25], [1.72903284E12, 3375434.966666667], [1.72903314E12, 3376484.9], [1.72903344E12, 3374338.533333333], [1.72903212E12, 3386686.7666666666], [1.72903242E12, 3376598.5], [1.72903272E12, 3252743.6333333333], [1.72903302E12, 3377719.3333333335], [1.72903332E12, 3376566.4833333334], [1.729032E12, 3381021.2], [1.72903362E12, 3377725.066666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7290323E12, 6000.0], [1.7290329E12, 5998.0], [1.7290332E12, 5986.0], [1.72903188E12, 22.0], [1.7290335E12, 6006.0], [1.72903248E12, 6000.0], [1.72903218E12, 5992.0], [1.72903278E12, 5926.0], [1.72903308E12, 5988.0], [1.72903338E12, 5992.0], [1.72903368E12, 5652.0], [1.72903236E12, 6000.0], [1.72903206E12, 5998.0], [1.72903266E12, 2476.0], [1.72903296E12, 5990.0], [1.72903326E12, 6002.0], [1.72903356E12, 5990.0], [1.72903224E12, 6000.0], [1.72903194E12, 3832.0], [1.72903254E12, 2070.0], [1.72903284E12, 5998.0], [1.72903314E12, 6000.0], [1.72903344E12, 5996.0], [1.72903212E12, 6018.0], [1.72903242E12, 6000.0], [1.72903272E12, 5780.0], [1.72903302E12, 6002.0], [1.72903332E12, 6000.0], [1.729032E12, 6008.0], [1.72903362E12, 6002.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903368E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 163.85476815398098, "minX": 1.72903188E12, "maxY": 875.1853932584268, "series": [{"data": [[1.7290323E12, 177.62933333333353], [1.7290329E12, 178.24308102700886], [1.7290332E12, 187.28867357166706], [1.72903188E12, 286.54545454545456], [1.7290335E12, 178.36829836829875], [1.72903248E12, 179.91066666666663], [1.72903218E12, 179.18491321762394], [1.72903278E12, 269.0722240971981], [1.72903308E12, 192.05110220440852], [1.72903338E12, 183.22997329773023], [1.72903368E12, 199.02972399150732], [1.72903236E12, 178.15233333333322], [1.72903206E12, 187.76292097365823], [1.72903266E12, 875.1853932584268], [1.72903296E12, 183.68948247078487], [1.72903326E12, 178.26524491836093], [1.72903356E12, 178.36994991652767], [1.72903224E12, 178.68766666666696], [1.72903194E12, 182.54592901878937], [1.72903254E12, 163.85476815398098], [1.72903284E12, 176.12304101367113], [1.72903314E12, 185.77933333333308], [1.72903344E12, 181.04936624416302], [1.72903212E12, 182.2462612163505], [1.72903242E12, 179.13799999999966], [1.72903272E12, 253.26262975778565], [1.72903302E12, 189.7264245251586], [1.72903332E12, 179.52533333333344], [1.729032E12, 177.99833555259713], [1.72903362E12, 179.04498500499815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903368E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 124.47069116360481, "minX": 1.72903188E12, "maxY": 551.9235955056195, "series": [{"data": [[1.7290323E12, 133.93300000000002], [1.7290329E12, 134.4904968322773], [1.7290332E12, 141.20247243568292], [1.72903188E12, 230.0], [1.7290335E12, 134.7668997668999], [1.72903248E12, 135.79766666666688], [1.72903218E12, 135.28905206942628], [1.72903278E12, 224.67026662166737], [1.72903308E12, 144.31095524382113], [1.72903338E12, 137.71762349799738], [1.72903368E12, 150.29547062986586], [1.72903236E12, 134.39433333333346], [1.72903206E12, 142.20440146715595], [1.72903266E12, 551.9235955056195], [1.72903296E12, 138.19499165275417], [1.72903326E12, 134.63378873708774], [1.72903356E12, 134.5175292153594], [1.72903224E12, 134.71900000000036], [1.72903194E12, 137.94102296450947], [1.72903254E12, 124.47069116360481], [1.72903284E12, 132.2644214738248], [1.72903314E12, 141.5390000000003], [1.72903344E12, 137.17911941294182], [1.72903212E12, 138.16782984380205], [1.72903242E12, 135.32233333333315], [1.72903272E12, 190.88235294117598], [1.72903302E12, 142.10363212262604], [1.72903332E12, 135.42900000000026], [1.729032E12, 134.53828229027985], [1.72903362E12, 134.92069310229908]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903368E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 80.36395450568673, "minX": 1.72903188E12, "maxY": 508.8011235955055, "series": [{"data": [[1.7290323E12, 85.65966666666667], [1.7290329E12, 87.21340446815596], [1.7290332E12, 91.9318409622453], [1.72903188E12, 170.63636363636363], [1.7290335E12, 87.42157842157853], [1.72903248E12, 86.9829999999999], [1.72903218E12, 86.86248331108156], [1.72903278E12, 177.67431657104288], [1.72903308E12, 94.16065464261862], [1.72903338E12, 89.52736982643543], [1.72903368E12, 98.49646142958247], [1.72903236E12, 86.11166666666664], [1.72903206E12, 92.23041013671212], [1.72903266E12, 508.8011235955055], [1.72903296E12, 89.18464106844736], [1.72903326E12, 87.38320559813381], [1.72903356E12, 87.09983305509193], [1.72903224E12, 86.33233333333317], [1.72903194E12, 89.63830897703536], [1.72903254E12, 80.36395450568673], [1.72903284E12, 85.60653551183736], [1.72903314E12, 93.09366666666669], [1.72903344E12, 89.57238158772513], [1.72903212E12, 88.98338318378187], [1.72903242E12, 87.2859999999999], [1.72903272E12, 131.68200692041466], [1.72903302E12, 92.30289903365536], [1.72903332E12, 87.36366666666679], [1.729032E12, 86.91145139813592], [1.72903362E12, 87.288903698767]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903368E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 145.0, "minX": 1.72903188E12, "maxY": 243427.0, "series": [{"data": [[1.7290323E12, 246.0], [1.7290329E12, 1200.0], [1.7290332E12, 3182.0], [1.72903188E12, 1196.0], [1.7290335E12, 1213.0], [1.72903248E12, 1184.0], [1.72903218E12, 283.0], [1.72903278E12, 243427.0], [1.72903308E12, 1356.0], [1.72903338E12, 1197.0], [1.72903368E12, 1337.0], [1.72903236E12, 503.0], [1.72903206E12, 1180.0], [1.72903266E12, 122418.0], [1.72903296E12, 1196.0], [1.72903326E12, 1201.0], [1.72903356E12, 1181.0], [1.72903224E12, 455.0], [1.72903194E12, 369.0], [1.72903254E12, 1188.0], [1.72903284E12, 1184.0], [1.72903314E12, 1304.0], [1.72903344E12, 1264.0], [1.72903212E12, 1178.0], [1.72903242E12, 1231.0], [1.72903272E12, 21415.0], [1.72903302E12, 1287.0], [1.72903332E12, 1190.0], [1.729032E12, 347.0], [1.72903362E12, 1179.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7290323E12, 193.0], [1.7290329E12, 191.0], [1.7290332E12, 209.0], [1.72903188E12, 1001.2000000000007], [1.7290335E12, 194.0], [1.72903248E12, 200.0], [1.72903218E12, 196.0], [1.72903278E12, 192.0], [1.72903308E12, 210.5], [1.72903338E12, 201.0], [1.72903368E12, 240.30000000000018], [1.72903236E12, 194.0], [1.72903206E12, 201.0], [1.72903266E12, 367.0], [1.72903296E12, 207.0], [1.72903326E12, 193.0], [1.72903356E12, 193.4000000000001], [1.72903224E12, 195.0], [1.72903194E12, 206.0], [1.72903254E12, 191.39999999999998], [1.72903284E12, 190.0], [1.72903314E12, 200.0], [1.72903344E12, 195.0], [1.72903212E12, 204.0], [1.72903242E12, 191.0], [1.72903272E12, 353.9000000000001], [1.72903302E12, 211.0], [1.72903332E12, 198.0], [1.729032E12, 194.0], [1.72903362E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7290323E12, 220.0], [1.7290329E12, 234.0], [1.7290332E12, 280.05999999999995], [1.72903188E12, 1196.0], [1.7290335E12, 242.96000000000004], [1.72903248E12, 253.98999999999978], [1.72903218E12, 246.0300000000002], [1.72903278E12, 274.0], [1.72903308E12, 453.15000000000055], [1.72903338E12, 280.0300000000002], [1.72903368E12, 476.19000000000005], [1.72903236E12, 225.0], [1.72903206E12, 596.0], [1.72903266E12, 1379.8299999999997], [1.72903296E12, 266.03999999999996], [1.72903326E12, 233.96000000000004], [1.72903356E12, 239.19999999999982], [1.72903224E12, 230.0], [1.72903194E12, 280.3199999999997], [1.72903254E12, 328.6400000000001], [1.72903284E12, 237.0], [1.72903314E12, 317.6099999999915], [1.72903344E12, 265.00999999999976], [1.72903212E12, 297.0], [1.72903242E12, 242.0], [1.72903272E12, 1547.6200000000026], [1.72903302E12, 271.98], [1.72903332E12, 260.0], [1.729032E12, 278.0], [1.72903362E12, 253.98000000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7290323E12, 200.0], [1.7290329E12, 205.0], [1.7290332E12, 224.0], [1.72903188E12, 1196.0], [1.7290335E12, 206.0], [1.72903248E12, 217.94999999999982], [1.72903218E12, 210.0], [1.72903278E12, 206.0], [1.72903308E12, 226.0], [1.72903338E12, 215.0], [1.72903368E12, 281.0], [1.72903236E12, 203.0], [1.72903206E12, 237.0], [1.72903266E12, 1174.1499999999999], [1.72903296E12, 223.0], [1.72903326E12, 203.0], [1.72903356E12, 206.0], [1.72903224E12, 208.0], [1.72903194E12, 226.0], [1.72903254E12, 202.0], [1.72903284E12, 201.0], [1.72903314E12, 213.0], [1.72903344E12, 208.0], [1.72903212E12, 219.0], [1.72903242E12, 203.0], [1.72903272E12, 523.8999999999996], [1.72903302E12, 224.0], [1.72903332E12, 213.94999999999982], [1.729032E12, 219.0], [1.72903362E12, 212.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7290323E12, 152.0], [1.7290329E12, 150.0], [1.7290332E12, 151.0], [1.72903188E12, 181.0], [1.7290335E12, 147.0], [1.72903248E12, 153.0], [1.72903218E12, 153.0], [1.72903278E12, 149.0], [1.72903308E12, 149.0], [1.72903338E12, 149.0], [1.72903368E12, 151.0], [1.72903236E12, 154.0], [1.72903206E12, 150.0], [1.72903266E12, 154.0], [1.72903296E12, 152.0], [1.72903326E12, 148.0], [1.72903356E12, 149.0], [1.72903224E12, 151.0], [1.72903194E12, 154.0], [1.72903254E12, 152.0], [1.72903284E12, 150.0], [1.72903314E12, 148.0], [1.72903344E12, 152.0], [1.72903212E12, 153.0], [1.72903242E12, 152.0], [1.72903272E12, 152.0], [1.72903302E12, 150.0], [1.72903332E12, 149.0], [1.729032E12, 145.0], [1.72903362E12, 147.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7290323E12, 176.0], [1.7290329E12, 172.0], [1.7290332E12, 178.0], [1.72903188E12, 195.0], [1.7290335E12, 173.0], [1.72903248E12, 175.0], [1.72903218E12, 176.0], [1.72903278E12, 172.0], [1.72903308E12, 181.0], [1.72903338E12, 176.0], [1.72903368E12, 178.0], [1.72903236E12, 176.0], [1.72903206E12, 174.0], [1.72903266E12, 202.0], [1.72903296E12, 178.0], [1.72903326E12, 173.0], [1.72903356E12, 173.0], [1.72903224E12, 176.0], [1.72903194E12, 176.0], [1.72903254E12, 175.0], [1.72903284E12, 172.0], [1.72903314E12, 175.0], [1.72903344E12, 173.0], [1.72903212E12, 176.0], [1.72903242E12, 175.0], [1.72903272E12, 179.0], [1.72903302E12, 183.0], [1.72903332E12, 173.0], [1.729032E12, 173.0], [1.72903362E12, 173.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903368E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 115515.5, "series": [{"data": [[5.0, 206.0], [8.0, 193.5], [10.0, 186.5], [11.0, 181.0], [13.0, 180.0], [15.0, 182.0], [16.0, 173.5], [17.0, 181.0], [18.0, 178.0], [19.0, 179.0], [21.0, 184.0], [22.0, 175.0], [23.0, 180.0], [24.0, 178.5], [25.0, 199.0], [28.0, 172.5], [29.0, 173.0], [33.0, 170.0], [32.0, 175.0], [34.0, 176.0], [36.0, 172.0], [37.0, 361.0], [38.0, 176.5], [39.0, 175.0], [40.0, 185.0], [41.0, 184.0], [43.0, 175.0], [42.0, 181.0], [44.0, 177.0], [45.0, 175.0], [46.0, 177.0], [47.0, 175.0], [48.0, 176.0], [49.0, 175.0], [50.0, 175.0], [51.0, 174.0], [53.0, 174.0], [52.0, 175.0], [55.0, 179.0], [54.0, 177.0], [56.0, 177.0], [57.0, 181.0], [58.0, 174.5], [59.0, 181.0], [61.0, 179.0], [60.0, 176.5], [62.0, 177.0], [67.0, 241.0], [69.0, 197.0], [1.0, 61125.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 115515.5], [37.0, 0.0], [39.0, 1.0], [43.0, 1.0], [98.0, 939.5], [49.0, 0.0], [60.0, 1.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 60989.0, "series": [{"data": [[5.0, 158.5], [8.0, 147.0], [10.0, 147.0], [11.0, 139.5], [13.0, 132.0], [15.0, 138.0], [16.0, 133.0], [17.0, 142.0], [18.0, 136.5], [19.0, 138.0], [21.0, 140.0], [22.0, 133.5], [23.0, 135.0], [24.0, 136.0], [25.0, 149.0], [28.0, 129.0], [29.0, 132.0], [33.0, 130.0], [32.0, 132.0], [34.0, 133.0], [36.0, 130.0], [37.0, 267.0], [38.0, 134.0], [39.0, 131.0], [40.0, 138.0], [41.0, 139.0], [43.0, 132.0], [42.0, 137.0], [44.0, 135.0], [45.0, 133.0], [46.0, 133.0], [47.0, 132.0], [48.0, 132.0], [49.0, 132.0], [50.0, 132.0], [51.0, 131.0], [53.0, 132.0], [52.0, 132.0], [55.0, 135.0], [54.0, 133.0], [56.0, 133.0], [57.0, 137.0], [58.0, 132.0], [59.0, 137.0], [61.0, 135.0], [60.0, 133.0], [62.0, 135.0], [67.0, 178.0], [69.0, 149.0], [1.0, 60989.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [37.0, 0.0], [39.0, 0.0], [43.0, 0.0], [98.0, 0.0], [49.0, 0.0], [60.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.72903188E12, "maxY": 50.2, "series": [{"data": [[1.7290323E12, 50.0], [1.7290329E12, 49.96666666666667], [1.7290332E12, 49.93333333333333], [1.72903188E12, 0.2], [1.7290335E12, 49.983333333333334], [1.72903248E12, 49.983333333333334], [1.72903218E12, 50.18333333333333], [1.72903278E12, 49.333333333333336], [1.72903308E12, 49.96666666666667], [1.72903338E12, 49.983333333333334], [1.72903368E12, 46.95], [1.72903236E12, 50.0], [1.72903206E12, 49.93333333333333], [1.72903266E12, 29.85], [1.72903296E12, 50.0], [1.72903326E12, 49.96666666666667], [1.72903356E12, 50.0], [1.72903224E12, 50.0], [1.72903194E12, 32.083333333333336], [1.72903254E12, 18.883333333333333], [1.72903284E12, 49.983333333333334], [1.72903314E12, 49.95], [1.72903344E12, 49.96666666666667], [1.72903212E12, 50.2], [1.72903242E12, 50.0], [1.72903272E12, 47.96666666666667], [1.72903302E12, 49.983333333333334], [1.72903332E12, 49.983333333333334], [1.729032E12, 49.983333333333334], [1.72903362E12, 49.983333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903368E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.72903188E12, "maxY": 50.15, "series": [{"data": [[1.7290323E12, 50.0], [1.7290329E12, 49.983333333333334], [1.7290332E12, 49.88333333333333], [1.72903188E12, 0.18333333333333332], [1.7290335E12, 50.05], [1.72903248E12, 50.0], [1.72903218E12, 49.93333333333333], [1.72903278E12, 49.38333333333333], [1.72903308E12, 49.9], [1.72903338E12, 49.93333333333333], [1.72903368E12, 47.1], [1.72903236E12, 50.0], [1.72903206E12, 49.983333333333334], [1.72903266E12, 20.633333333333333], [1.72903296E12, 49.916666666666664], [1.72903326E12, 50.016666666666666], [1.72903356E12, 49.916666666666664], [1.72903224E12, 50.0], [1.72903194E12, 31.933333333333334], [1.72903254E12, 17.25], [1.72903284E12, 49.983333333333334], [1.72903314E12, 50.0], [1.72903344E12, 49.96666666666667], [1.72903212E12, 50.15], [1.72903242E12, 50.0], [1.72903272E12, 48.166666666666664], [1.72903302E12, 50.016666666666666], [1.72903332E12, 50.0], [1.729032E12, 50.06666666666667], [1.72903362E12, 50.016666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.72903254E12, 1.8], [1.72903266E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.NoRouteToHostException", "isController": false}, {"data": [[1.72903266E12, 9.0]], "isOverall": false, "label": "Non HTTP response code: java.net.UnknownHostException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72903368E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.72903188E12, "maxY": 50.15, "series": [{"data": [[1.7290323E12, 50.0], [1.7290329E12, 49.983333333333334], [1.7290332E12, 49.88333333333333], [1.72903188E12, 0.18333333333333332], [1.7290335E12, 50.05], [1.72903248E12, 50.0], [1.72903218E12, 49.93333333333333], [1.72903278E12, 49.38333333333333], [1.72903308E12, 49.9], [1.72903338E12, 49.93333333333333], [1.72903368E12, 47.1], [1.72903236E12, 50.0], [1.72903206E12, 49.983333333333334], [1.72903266E12, 20.633333333333333], [1.72903296E12, 49.916666666666664], [1.72903326E12, 50.016666666666666], [1.72903356E12, 49.916666666666664], [1.72903224E12, 50.0], [1.72903194E12, 31.933333333333334], [1.72903254E12, 17.25], [1.72903284E12, 49.983333333333334], [1.72903314E12, 50.0], [1.72903344E12, 49.96666666666667], [1.72903212E12, 50.15], [1.72903242E12, 50.0], [1.72903272E12, 48.166666666666664], [1.72903302E12, 50.016666666666666], [1.72903332E12, 50.0], [1.729032E12, 50.06666666666667], [1.72903362E12, 50.016666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.72903254E12, 1.8], [1.72903266E12, 9.033333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903368E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.72903188E12, "maxY": 50.15, "series": [{"data": [[1.7290323E12, 50.0], [1.7290329E12, 49.983333333333334], [1.7290332E12, 49.88333333333333], [1.72903188E12, 0.18333333333333332], [1.7290335E12, 50.05], [1.72903248E12, 50.0], [1.72903218E12, 49.93333333333333], [1.72903278E12, 49.38333333333333], [1.72903308E12, 49.9], [1.72903338E12, 49.93333333333333], [1.72903368E12, 47.1], [1.72903236E12, 50.0], [1.72903206E12, 49.983333333333334], [1.72903266E12, 20.633333333333333], [1.72903296E12, 49.916666666666664], [1.72903326E12, 50.016666666666666], [1.72903356E12, 49.916666666666664], [1.72903224E12, 50.0], [1.72903194E12, 31.933333333333334], [1.72903254E12, 17.25], [1.72903284E12, 49.983333333333334], [1.72903314E12, 50.0], [1.72903344E12, 49.96666666666667], [1.72903212E12, 50.15], [1.72903242E12, 50.0], [1.72903272E12, 48.166666666666664], [1.72903302E12, 50.016666666666666], [1.72903332E12, 50.0], [1.729032E12, 50.06666666666667], [1.72903362E12, 50.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.72903254E12, 1.8], [1.72903266E12, 9.033333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72903368E12, "title": "Total Transactions Per Second"}},
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

