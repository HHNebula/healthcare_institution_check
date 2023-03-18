package com.healthcare.institution.check.healthcare_institution_check.service;

import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import java.io.BufferedReader;
import java.io.IOException;

@Service
public class ApiExplorer {

	final String ENCODING_TYPE = "UTF-8";
	final String SERVICE_KEY = "qyu41dHfqWMsjJriPgiImVrkjd%2Fv3Z2n%2FDXTfdfz%2FtvtR3OqhMDDw8egXtEEI1%2BBpU1DgDFNvhjSC3E8wPE17A%3D%3D";

	public List<Map<String, String>> getApiDataPharmacy(Map<String, String> params)
			throws IOException, SAXException, ParserConfigurationException {

		StringBuilder urlBuilder = new StringBuilder(
				"http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire");
		urlBuilder.append("?" + URLEncoder.encode("serviceKey", ENCODING_TYPE) + "=" + SERVICE_KEY);

		urlBuilder.append("&" + URLEncoder.encode("Q0", ENCODING_TYPE) + "="
				+ URLEncoder.encode(params.get("doSelect"), ENCODING_TYPE));

		urlBuilder.append("&" + URLEncoder.encode("Q1", ENCODING_TYPE) + "="
				+ URLEncoder.encode(params.get("si"), ENCODING_TYPE));

		urlBuilder.append("&" + URLEncoder.encode("QT", ENCODING_TYPE) + "="
				+ URLEncoder.encode(params.get("yoil"), ENCODING_TYPE));

		urlBuilder.append("&" + URLEncoder.encode("QN", ENCODING_TYPE) + "="
				+ URLEncoder.encode(params.get("pharmacyName"), ENCODING_TYPE));

		urlBuilder
				.append("&" + URLEncoder.encode("ORD", ENCODING_TYPE) + "="
						+ URLEncoder.encode("NAME", ENCODING_TYPE));

		urlBuilder
				.append("&" + URLEncoder.encode("pageNo", ENCODING_TYPE) + "="
						+ URLEncoder.encode(params.get("pageNo"), ENCODING_TYPE));

		urlBuilder.append(
				"&" + URLEncoder.encode("numOfRows", ENCODING_TYPE) + "="
						+ URLEncoder.encode("10", ENCODING_TYPE));

		URL url = new URL(urlBuilder.toString());
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();

		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-type", "application/json");

		System.out.println("Response code: " + conn.getResponseCode());

		BufferedReader rd;
		if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream(), ENCODING_TYPE));
		} else {
			rd = new BufferedReader(new InputStreamReader(conn.getErrorStream(), ENCODING_TYPE));
		}

		StringBuilder sb = new StringBuilder();
		String line;
		while ((line = rd.readLine()) != null) {
			sb.append(line);
		}
		rd.close();

		conn.disconnect();

		String xml = sb.toString();

		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
		InputSource is = new InputSource();
		is.setCharacterStream(new StringReader(xml));
		Document doc = dBuilder.parse(is);
		doc.getDocumentElement().normalize();

		NodeList nList = doc.getElementsByTagName("item");
		List<Map<String, String>> result = new ArrayList<>();

		NodeList nodeList;
		for (int i = 0; i < nList.getLength(); i++) {
			Node node = nList.item(i);
			if (node.getNodeType() == Node.ELEMENT_NODE) {
				Element element = (Element) node;
				Map<String, String> map = new HashMap<>();
				map.put("dutyAddr", element.getElementsByTagName("dutyAddr").item(0).getTextContent());
				map.put("dutyName", element.getElementsByTagName("dutyName").item(0).getTextContent());
				map.put("dutyTel1", element.getElementsByTagName("dutyTel1").item(0).getTextContent());

				nodeList = element.getElementsByTagName("dutyTime1c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime1c",
							element.getElementsByTagName("dutyTime1c").item(0)
									.getTextContent());
					map.put("dutyTime1s",
							element.getElementsByTagName("dutyTime1s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime1c", null);
					map.put("dutyTime1s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime2c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime2c",
							element.getElementsByTagName("dutyTime2c").item(0)
									.getTextContent());
					map.put("dutyTime2s",
							element.getElementsByTagName("dutyTime2s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime2c", null);
					map.put("dutyTime2s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime3c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime3c",
							element.getElementsByTagName("dutyTime3c").item(0)
									.getTextContent());
					map.put("dutyTime3s",
							element.getElementsByTagName("dutyTime3s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime3c", null);
					map.put("dutyTime3s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime4c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime4c",
							element.getElementsByTagName("dutyTime4c").item(0)
									.getTextContent());
					map.put("dutyTime4s",
							element.getElementsByTagName("dutyTime4s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime4c", null);
					map.put("dutyTime4s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime5c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime5c",
							element.getElementsByTagName("dutyTime5c").item(0)
									.getTextContent());
					map.put("dutyTime5s",
							element.getElementsByTagName("dutyTime5s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime5c", null);
					map.put("dutyTime5s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime6c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime6c",
							element.getElementsByTagName("dutyTime6c").item(0)
									.getTextContent());
					map.put("dutyTime6s",
							element.getElementsByTagName("dutyTime6s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime6c", null);
					map.put("dutyTime6s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime7c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime7c",
							element.getElementsByTagName("dutyTime7c").item(0)
									.getTextContent());
					map.put("dutyTime7s",
							element.getElementsByTagName("dutyTime7s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime7c", null);
					map.put("dutyTime7s", null);
				}

				nodeList = element.getElementsByTagName("dutyTime8c");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyTime8c",
							element.getElementsByTagName("dutyTime8c").item(0)
									.getTextContent());
					map.put("dutyTime8s",
							element.getElementsByTagName("dutyTime8s").item(0)
									.getTextContent());
				} else {
					map.put("dutyTime8c", null);
					map.put("dutyTime8s", null);
				}

				nodeList = element.getElementsByTagName("dutyMapimg");
				if (nodeList != null && nodeList.getLength() > 0) {
					map.put("dutyMapimg",
							element.getElementsByTagName("dutyMapimg").item(0)
									.getTextContent());
				} else {
					map.put("dutyMapimg", null);
				}

				map.put("hpid", element.getElementsByTagName("hpid").item(0).getTextContent());
				map.put("postCdn1", element.getElementsByTagName("postCdn1").item(0).getTextContent());
				map.put("postCdn1", element.getElementsByTagName("postCdn1").item(0).getTextContent());
				map.put("postCdn2", element.getElementsByTagName("postCdn2").item(0).getTextContent());
				map.put("postCdn2", element.getElementsByTagName("postCdn2").item(0).getTextContent());
				map.put("rnum", element.getElementsByTagName("rnum").item(0).getTextContent());
				map.put("wgs84Lat", element.getElementsByTagName("wgs84Lat").item(0).getTextContent());
				map.put("wgs84Lon", element.getElementsByTagName("wgs84Lon").item(0).getTextContent());
				result.add(map);
			}
		}

		return result;

	}
}