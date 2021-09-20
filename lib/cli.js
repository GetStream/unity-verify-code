#!/usr/bin/env node
/**
 * $File: cli.js $
 * $Date: 2021-09-21 01:03:30 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2021 by Shen, Jen-Chieh $
 */

"use strict";

const fs = require('fs');
const activate = require('./parse');

const usage =
      "usage : unity-license-activate [email] [password] [alf_file_path]\n" +
      "\n" +
      "Unity License Activate : Activate Unity license through CLI.\n" +
      "\n" +
      "positional arguments:\n" +
      "  email          Username or Email you use to register for Unity account\n" +
      "  password       Password to login Unity account\n" +
      "  alf            Unity activation license file path\n";

/* CLI */
const cli_md = function (email, password, alf) {
  email = email || "";
  password = password || "";
  alf = alf || "";

  // Check valid args.
  if (email == "" || password == "" || alf == "") {
    console.log("[ERROR] Invalid alf file path, " + alf);
    console.log(usage);
  }
  // Check directory/file exists.
  else if (!fs.existsSync(alf)) {
    console.log("Invalid alf file path, " + alf);
  }
  // Do build action.
  else {
    activate.start(email, password, alf);
  }
};

/** CLI entry */
if (require.main === module) {
  let args = process.argv;
  cli_md(args[2], args[3], args[4]);
}
