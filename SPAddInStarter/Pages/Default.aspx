﻿<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <link rel="stylesheet" type="text/css" href="../styles/app.css" />
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />
    <style type="text/css">
        @-webkit-keyframes spin {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        @-moz-keyframes spin {
            0% {
                -moz-transform: rotate(0);
            }

            100% {
                -moz-transform: rotate(360deg);
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .spinner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1003;
            background: #000000;
            overflow: hidden;
        }

            .spinner div:first-child {
                display: block;
                position: relative;
                left: 50%;
                top: 50%;
                width: 150px;
                height: 150px;
                margin: -75px 0 0 -75px;
                border-radius: 50%;
                box-shadow: 0 3px 3px 0 rgba(255,56,106,1);
                transform: translate3d(0,0,0);
                animation: spin 2s linear infinite;
            }

                .spinner div:first-child:after, .spinner div:first-child:before {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                }

                .spinner div:first-child:before {
                    top: 5px;
                    left: 5px;
                    right: 5px;
                    bottom: 5px;
                    box-shadow: 0 3px 3px 0 rgb(255, 228, 32);
                    -webkit-animation: spin 3s linear infinite;
                    animation: spin 3s linear infinite;
                }

                .spinner div:first-child:after {
                    top: 15px;
                    left: 15px;
                    right: 15px;
                    bottom: 15px;
                    box-shadow: 0 3px 3px 0 rgba(61, 175, 255,1);
                    animation: spin 1.5s linear infinite;
                }
    </style>
    
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <ngx-app>Loading...</ngx-app>


    <div id="nb-global-spinner" class="spinner">
        <div class="blob blob-0"></div>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
        <div class="blob blob-4"></div>
        <div class="blob blob-5"></div>
    </div>

    <script type="text/javascript" src="../app/dist/runtime.js"></script>
    <script type="text/javascript" src="../app/dist/polyfills.js"></script>
    <script type="text/javascript" src="../app/dist/styles.js"></script>
    <script type="text/javascript" src="../app/dist/scripts.js"></script>
    <script type="text/javascript" src="../app/dist/vendor.js"></script>
    <script type="text/javascript" src="../app/dist/main.js"></script>

</asp:Content>


