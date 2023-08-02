import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Title from "@site/src/components/Title";
import type { ResultRowsType } from "./types";
import { Typography } from "@mui/material";

export default Result;

function Result({ rows }: { rows: ResultRowsType }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Title title="测试结果" sx={{ fontSize: "16px", marginBottom: "16px" }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>WAF 类别</TableCell>
              <TableCell>版本</TableCell>
              <TableCell>检出率</TableCell>
              <TableCell>误报率</TableCell>
              <TableCell>准确率</TableCell>
              <TableCell>平均检测耗时</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{appendLink(row.engine)}</TableCell>
                <TableCell>{row.version}</TableCell>
                <TableCell>{row.detectionRate}</TableCell>
                <TableCell>{row.failedRate}</TableCell>
                <TableCell>{row.accuracy}</TableCell>
                <TableCell>{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function appendLink(engine: string) {
  if (engine == "ModSecurity")
    return (
      <a href="https://github.com/SpiderLabs/ModSecurity" target="_blank">
        <Typography sx={{ color: "primary.main" }}>{engine}</Typography>
      </a>
    );
  if (engine == "TADK")
    return (
      <a
        target="_blank"
        href="https://networkbuilders.intel.com/university/course/traffic-analytics-development-kit-tadk"
      >
        <Typography sx={{ color: "primary.main" }}>{engine}</Typography>
      </a>
    );
  return engine;
}
