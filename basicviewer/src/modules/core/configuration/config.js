﻿/*This file contains the configurable parameters object that can be copy/pasted in ArcGIS Online when registering application as a template.
    See help for the process: http://resources.arcgis.com/en/help/main/10.1/01w1/01w10000008p000000.htm

  The "fieldName"s are the parameters that get passed from AGO in the app config object. The "value"s are the corresponding values that get passed
    from AGO in the app config object.  The fieldNames/values correspond to the default config object (configOptions) in app.js and override
    any values in configOptions (if an appid is set in configOptions or found in the URL querystring)
 */
{
    "values": {
        "displaybasemaps": true,
            "tablecontents": true,
            "adddata": true,
            "displayshare": false,
            "displaymeasure": true,
			"displaydraw": true,
            "displaylocation": true,
            "displayelevation": false,
            "showelevationdifference": false,
            "theme": "imap",
            "displaydetails": true,
            "startupwidget": "displaydetails",
            "displayeditor": false,
            "displayoverviewmap": true,
			"displayquery": true,
            "displaytimeslider": false,
            "displayprint": true,
            "displaysearch": true,
			"zoomtocounty": true,
            "embed": false,
            "displaypointtransp": false
    },
    "configurationSettings": [{
        "category": "<b>Layout</b>",
        "fields": [{
            "label": "Theme:",
            "fieldName": "theme",
            "type": "string",
            "options": [{
                "value": "imap",
                "label": "MD iMap Basic"
            },{
                "value": "blue",
                "label": "Blue"
            }, {
                "value": "gray",
                "label": "Gray"
            }, {
                "value": "green",
                "label": "Green"
            }, {
                "value": "orange",
                "label": "Orange"
            }, {
                "value": "purple",
                "label": "Purple"
            }, {
                "value": "earth1",
                "label": "Earth1 (Darker Browns)"
                }, {
                "value": "earth2",
                "label": "Earth2 (Lighter Browns)"
                }, {
                "value": "black",
                "label": "Black"
            }],
            "tooltip": "Theme to use"
        }, {
            "label": "Show Title",
            "fieldName": "displaytitle",
            "type": "boolean",
            "tooltip": ""
        }, {
            "placeHolder": "Defaults to map name",
            "label": "Title Text:",
            "fieldName": "title",
            "type": "string",
            "tooltip": ""
        }, {
            "placeHolder": "URL to logo before title",
            "label": "Title Logo URL:",
            "fieldName": "titleLogoUrl",
            "type": "string",
            "tooltip": "URL for upper left image"
        }, {
            "placeHolder": "Hyperlink for title logo",
            "label": "Title Logo Hyperlink:",
            "fieldName": "titleLogoLink",
            "type": "string",
            "tooltip": "URL for title logo hyperlink"
        },{
            "placeHolder": "URL to image",
            "label": "Logo on map:",
            "fieldName": "customlogoimage",
            "type": "string",
            "tooltip": "Url for image"
        }, {
            "placeHolder": "Hyperlink for map logo",
            "label": "Map Logo Hyperlink:",
            "fieldName": "customlogolink",
            "type": "string",
            "tooltip": "URL for map logo hyperlink"
        },{
            "placeHolder": "Header height",
            "label": "Header height (px):",
            "fieldName": "headerHeight",
            "type": "string",
            "tooltip": "in pixels"
        },{
            "placeHolder": "Hyperlink 1 Text",
            "label": "Hyperlink 1 Text:",
            "fieldName": "link1text",
            "type": "string",
            "tooltip": "Text to display"
        },{
            "placeHolder": "Hyperlink 1 URL",
            "label": "Hyperlink 1 URL:",
            "fieldName": "link1url",
            "type": "string",
            "tooltip": "URL to go to"
        },{
            "placeHolder": "Hyperlink 2 Text",
            "label": "Hyperlink 2 Text:",
            "fieldName": "link2text",
            "type": "string",
            "tooltip": "Text to display"
        },{
            "placeHolder": "Hyperlink 2 URL",
            "label": "Hyperlink 2 URL:",
            "fieldName": "link2url",
            "type": "string",
            "tooltip": "URL to go to"
        },{
            "placeHolder": "Disable Left Pane",
            "label": "Disable Left Pane",
            "fieldName": "disableLeftPane",
            "type": "boolean",
            "tooltip": "Disables left pane, overrides Left Panel Width, and any widget settings targeting the left pane."
        },{
            "placeHolder": "Left panel width",
            "label": "Left panel width (px):",
            "fieldName": "leftpanewidth",
            "type": "string",
            "tooltip": "in pixels"
        },{
            "label": "Embed in Host Page",
            "fieldName": "embed",
            "type": "boolean",
            "tooltip": ""
        },{
            "label": "Show Transparency Slider for Point/Line layers",
            "fieldName": "displaypointtransp",
            "type": "boolean",
            "tooltip": ""
        }]
    }, {
        "category": "<b>Widgets</b>",
        "fields": [{
            "label": "Details",
            "fieldName": "displaydetails",
            "type": "boolean",
            "tooltip": "Descriptions"
        }, {
            "label": "Table of Contents",
            "fieldName": "tablecontents",
            "type": "boolean",
            "tooltip": "Legend"
		}, {
            "label": "Query",
            "fieldName": "displayquery",
            "type": "boolean",
            "tooltip": "Query"
        },{
            "label": "Add Data",
            "fieldName": "adddata",
            "type": "boolean",
            "tooltip": "Add Data"
        }, {
            "label": "Startup Widget:",
            "fieldName": "startupwidget",
            "type": "string",
            "options": [{
                "label": "Details",
                "value": "displaydetails"
            }, {
                "label": "Table of Contents",
                "value": "tablecontents"
            }, {
                "label": "Add Data",
                "value": "adddata"
            }, {
                "label": "None",
                "value": "none"
            }],
            "tooltip": "Widget to show in left panel on load"
        }]
    }, {
        "category": "<b>Tools</b>",
        "fields": [{
            "label": "Print",
            "fieldName": "displayprint",
            "type": "boolean",
            "tooltip": "Print map; choose orientation"
        }, {
            "label": "Basemaps",
            "fieldName": "displaybasemaps",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Location",
            "fieldName": "displaylocation",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Search",
            "fieldName": "displaysearch",
            "type": "boolean",
            "tooltip": ""
		}, {
            "label": "Draw",
            "fieldName": "displaydraw",
            "type": "boolean",
            "tooltip": "Drawing Tools"
		}, {
			"label": "Measure",
			"fieldName": "displaymeasure",
			"type": "boolean",
			"tooltip": "Measuring Tools"
        }, {
            "label": "Include Overview Map",
            "fieldName": "displayoverviewmap",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Add File",
            "fieldName": "displayinterop",
            "type": "boolean",
            "tooltip": "Add your own data"
		}, {
            "label": "Zoom to County",
            "fieldName": "zoomtocounty",
            "type": "boolean",
            "tooltip": "Zoom to a county"
		}]
    }];
}