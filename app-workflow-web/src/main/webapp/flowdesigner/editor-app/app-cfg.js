/*
 * Activiti Modeler component part of the Activiti project
 * Copyright 2005-2014 Alfresco Software, Ltd. All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
'use strict';

var ACTIVITI = ACTIVITI || {};
var localObj = window.location;
var contextPath = "/" + localObj.pathname.split("/")[1];

ACTIVITI.CONFIG = {
	'contextRoot' : contextPath
};

ACTIVITI.CUSTOM_URL ={
	'custom_stencilset_url': ACTIVITI.CONFIG.contextRoot + '/workflow/definition/designer/stencilset',
	'custom_model_detail_url': ACTIVITI.CONFIG.contextRoot + '/workflow/definition/detail',
	'custom_model_metadata_save_url': ACTIVITI.CONFIG.contextRoot + '/workflow/definition/save',
	'custom_def_verify_key_url': ACTIVITI.CONFIG.contextRoot + "/workflow/definition/verification"
}



