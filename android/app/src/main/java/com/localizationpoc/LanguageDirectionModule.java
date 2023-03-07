package com.localizationpoc;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.util.LayoutDirection;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Locale;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class LanguageDirectionModule extends ReactContextBaseJavaModule {
    LanguageDirectionModule(ReactApplicationContext context){
        super(context);
    }

    @Override
    public String getName() {
        return "LanguageDirectionModule";
    }

//    @Override
//    public void onConfigurationChanged(Configuration newConfig) {
//        super.onConfigurationChanged(newConfig);
//
//        // Checks whether any keyboard is available
//        if (newConfig.keyboardHidden == Configuration.KEYBOARDHIDDEN_YES) {
//            Toast.makeText(this, "Keyboard available", Toast.LENGTH_SHORT).show();
//        } else if (newConfig.keyboardHidden == Configuration.KEYBOARDHIDDEN_NO){
//            Toast.makeText(this, "No keyboard", Toast.LENGTH_SHORT).show();
//        }
//    }
    
    @ReactMethod
    public void toggleLanguageDirection(String lang){
        String TAG;
        TAG= "aa";
        Log.d(TAG, "toggleLanguageDirection: hghghjgjhgh");


    }
}
