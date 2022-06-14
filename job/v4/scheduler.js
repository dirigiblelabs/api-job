/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
/**
 * API v4 Job
 * 
 */

exports.getJobs = function() {
	var jobs = JSON.parse(org.eclipse.dirigible.api.v3.job.JobFacade.getJobs());
	return jobs;
};

exports.getJob = function(name) {
	var job = JSON.parse(org.eclipse.dirigible.api.v3.job.JobFacade.getJob(name));
	return job;
};
