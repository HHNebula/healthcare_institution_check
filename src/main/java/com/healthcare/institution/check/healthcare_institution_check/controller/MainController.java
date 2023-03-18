package com.healthcare.institution.check.healthcare_institution_check.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @GetMapping("")
    public ModelAndView noticePage(ModelAndView modelAndView) {
        modelAndView.setViewName("notice");
        return modelAndView;
    }

    @GetMapping("/home")
    public ModelAndView homePage(ModelAndView modelAndView) {
        modelAndView.setViewName("home");
        return modelAndView;
    }

    @GetMapping("/pharmacy")
    public ModelAndView pharmacy(ModelAndView modelAndView) {

        modelAndView.setViewName("pharmacy");
        return modelAndView;
    }

    @GetMapping("/holidayHospital")
    public ModelAndView holidayHospital(ModelAndView modelAndView) {

        modelAndView.setViewName("holidayHospital");
        return modelAndView;
    }

}
