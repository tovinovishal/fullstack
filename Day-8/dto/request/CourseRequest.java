package com.chess.vishxl.dto.request;

import com.chess.vishxl.model.User;
 
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
     private String id;
     private String coursename;
     private String content;
     private User user;
}
