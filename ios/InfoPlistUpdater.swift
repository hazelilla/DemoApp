//
//  InfoPlistUpdater.swift
//  DemoApp
//
//  Created by Popleads on 25.04.2024.
//

import Foundation

// Function to update the Info.plist dynamically
func updateInfoPlist() {
    guard let infoPlistPath = Bundle.main.path(forResource: "Info", ofType: "plist") else {
        print("Info.plist not found")
        return
    }
    
    // Load Info.plist as NSMutableDictionary to modify it
    guard let plistDict = NSMutableDictionary(contentsOfFile: infoPlistPath) else {
        print("Failed to load Info.plist")
        return
    }
    
    // Update NSLocationWhenInUseUsageDescription dynamically
    let locationDescription = "This app needs access to your location."
    plistDict["NSLocationWhenInUseUsageDescription"] = locationDescription
    
    // Update other permission keys similarly
    
    // Write back to Info.plist
    if plistDict.write(toFile: infoPlistPath, atomically: true) {
        print("Info.plist updated successfully")
    } else {
        print("Failed to update Info.plist")
    }
}

// Call the function to update Info.plist
updateInfoPlist()
