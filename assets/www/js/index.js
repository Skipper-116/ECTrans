/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function transale(){
    var english =["How are you?","How can i reach Zomba?","How can i contact the police?","Thank you very much!","On emergency push this glass","Enter your pin code","Enter your pin code here" ];
    var chichewa=["Muli bwanji?","Kodi ndingafike bwanji ku Zomba?","Ndingawafikire bwanji apolisi?","Zikomo kwambiri!","Pa ngozi kankhani galasi iyi","Lowesani nambala yanu ya chinsinsi","Lowesani nambala yanu ya chinsisi apa"];
    var translation = $("#source").val();
    var state = 0;
    var i = 0;
    var output;


    for (var i = 0; i < english.length; i++) {
        if(english[i] == translation){
            translation =chichewa[i];
        }
        else{

        }
    };
    $("#target").html(translation);
}
function clearText(){
    $("#source").val("")
}
function suggest(){
    alert("Your suggestion has been uploaded to the server to be reviewed");
}