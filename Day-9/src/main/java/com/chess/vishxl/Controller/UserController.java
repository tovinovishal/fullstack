package com.chess.vishxl.Controller;

import static com.chess.vishxl.utils.MyConstant.USER;
import static com.chess.vishxl.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chess.vishxl.Service.UserService;
import com.chess.vishxl.dto.response.BasicResponse;
import com.chess.vishxl.dto.response.UserResponse;

import lombok.RequiredArgsConstructor;

@RequestMapping(USER)
@RestController
@RequiredArgsConstructor
public class UserController {

        private final UserService userService;

        @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> create() {
            BasicResponse<UserResponse> response = new BasicResponse<>();
            try {
                response = userService.getAllUser();
                return new ResponseEntity<>(response,HttpStatus.OK);
            } catch (Exception e) {
                response.setMessage("Something went wrong!");
                return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
            }
        }
    

}
