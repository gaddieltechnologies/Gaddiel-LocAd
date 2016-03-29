package com.gaddiel.eorg;

import org.apache.cordova.Config;
import org.apache.cordova.CordovaActivity;
import android.os.Bundle;


public class MainActivity extends CordovaActivity {

	 public void onCreate(Bundle savedInstanceState) {
	    	super.onCreate(savedInstanceState);
	        super.init();
	        //Set by <content src="index.html" /> in config.xml
	        super.loadUrl(Config.getStartUrl());
	        //super.loadUrl("file:///android_asset/www/index.html");
	    }
	
}
