package com.healthcare.institution.check.healthcare_institution_check.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.healthcare.institution.check.healthcare_institution_check.service.ApiExplorer;

@Controller
public class ApiController {

    @Autowired
    ApiExplorer apiExplorer;

    @ResponseBody
    @PostMapping("/getApiPharmacy")
    public Object integrateAction(@RequestBody Map<String, String> params) {

        Object resultList;
        try {
            resultList = apiExplorer.getApiDataPharmacy(params);
        } catch (Exception e) {
            resultList = null;
        }

        return resultList;
    }

}
