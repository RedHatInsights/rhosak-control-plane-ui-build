"use strict";(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[2192],{12192:e=>{e.exports=JSON.parse('{"all_region_unavailable_helper_text":"All regions in the selected cloud provider are temporarily unavailable. Select another cloud provider or try again later.","availability_zone_selection":"Availability zone selection","availability_zones":"Availability zones","availability_zones_tooltip_message":"At this time, only {{enabledZone}} availability zones are available.","az":{"multi":"Multi","single":"Single"},"billing":{"field_label":"Billing","field_popover_external_marketplace":"Billing indicates which subscription is used to pay for the instance. When using a subscription purchased through  another marketplace, the cloud provider associated with the marketplace must be selected. <0>See subscription options</0>","field_popover_rh_only":"Billing indicates which subscription is used to pay for the instance. <0>See subscription options</0>","marketplace":"Marketplace","marketplace_aws":"$t(common:cloudProviders.aws_short) $t(create-kafka-instance:billing.marketplace)","marketplace_azure":"$t(common:cloudProviders.azure) $t(create-kafka-instance:billing.marketplace)","marketplace_out_of_quota":"The selected size exceeds the quota available for the marketplace billing option.","marketplace_rh":"$t(common:cloudProviders.rh) $t(create-kafka-instance:billing.marketplace)","prepaid":"Prepaid","prepaid_option":"$t(common:cloudProviders.rh) prepaid","prepaid_out_of_quota":"The selected size exceeds the quota available for the prepaid billing option.","provider_incompatible_with_current_billing":"Incompatible with current billing option"},"checking_instance_message":"Checking $t(common:kafka) availability","checking_instance_title":"Checking if new $t(common:kafka) instances are available","client_connections_value":"up to {{value}}","cloud_provider":"Cloud provider","cloud_region":"Cloud region","cloud_region_description":"More cloud regions are available with a subscription. <0>Learn more about cloud regions</0>.","connection_rate_value":"up to {{value}} connections/second","create_instance":"Create instance","create_instance_name_helper_text":"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - ).","create_instance_name_helper_text_name_taken":"{{name}} already exists. Please try a different name.","create_instance_title":"Create a $t(common:kafka) instance","duration_value":"{{value}} hours","egress_value":"up to {{value}} MiB/second","form_errors":{"form_invalid":"Address form errors to proceed.","out_of_quota_message":"The selected size requires more quota. To deploy a new instance, reduce its size, delete an existing one first, or <0>contact us</0> to add more quota to your account.","out_of_quota_title":"$t(common:kafka) instance can\'t be created","region_unavailable_message":"Select another region or try again later.","region_unavailable_title":"The selected cloud provider region is temporarily unavailable.","trial_unavailable_message":"All available trial instances are currently in use. Please try again later.","trial_unavailable_title":"$t(common:kafka) instance can\'t be created","unknown_error_message":"$t(common:unexpected_error)","unknown_error_title":"$t(common:something_went_wrong)"},"ingress_value":"up to {{value}} MiB/second","instance_creation_time_alert":"Your $t(common:kafka) instance will be ready for use shortly after creation.","instance_information":"Details","instance_name":"Name","kafka_status_created_shortly_help":"This will be ready shortly.","kafka_status_popover":{"header_content":"This will be ready shortly. In the meantime, you can create a service account under the <0>Connection tab.<0>","header_content_with_error":"In the meantime, you can create a service account under the <0>Connections tab.</0> If your Kafka instance continues to take longer than expected, <1>open a support case.</1>","header_content_with_warning":"In the meantime, you can create a service account under the <0>Connection tab.<0>","pending":{"description":"Passed quota check and awaiting creation","title":"Creation pending"},"preparing":{"description":"Creating prerequisite resources","title":"Preparing"},"provisioning":{"description":"Creating $t(common:kafka) instance","title":"Provisioning"},"title":"Creating instance","warning_or_error_title":"$t(kafka_status_warning_or_error_title)"},"kafka_status_warning_or_error_title":"This is taking longer than expected.","learn_about_cloud_regions":"Learn more about cloud regions","learn_about_sizes":"Learn more about sizes","message_size_value":"up to {{value}} MiB","modal_alerts":{"instance_unavailable_message":"$t(common:kafka) instances are temporarily available. Please try again in a few hours.","instance_unavailable_title":"$t(common:kafka) instances are unavailable for creation","out_of_quota_message":"To deploy a new instance, delete an existing one first or <0>contact us</0> to add more quota to your account.","out_of_quota_title":"Your organization is out of quota.","regions_unavailable_message":"Cloud provider regions are temporarily unavailable. Please try again later.","system_unavailable_message":"$t(common:unexpected_error)","system_unavailable_title":"$t(common:something_went_wrong)","trial_available_message":"The trial has a duration of <1>{{time}}</1> hours. If you are interested in using this service in production, go to our <0>Streams for Apache Kafka Overview</0> page to see what options are available during creation and learn how to <0>contact us</0>.","trial_available_title":"You can create a trial instance to evaluate this service.","trial_unavailable_message":"All available trial instances are currently in use. Please try again later.","trial_unavailable_title":"$t(common:kafka) instances are unavailable for creation","trial_used_message":"You can deploy 1 trial instance at a time. To deploy a new instance, delete your existing one first. If you are interested in using this service in production, go to the <0>Streams for Apache Kafka Overview</0> to see what options are available during creation and learn how to <0>contact us</0>.","trial_used_title":"You already have an instance running"},"no_regions_available":"No regions available","partitions_value":"up to {{value}}","provider_incompatible_with_billing":"","quick_start_guide_message":"Need help getting started? Follow our quick start guide.","quick_start_guide_message_exp":"Follow our quick start guide.","quick_start_guide_title":"Need help getting started?","regions_temporarily_unavailable":"Regions temporarily unavailable","select_billing":"","select_cloud_provider":"Select cloud provider","select_region":"Select region","size_field_aria":"More info for Size field","size_help_content":"Size of a $t(common:kafka) instance is based on streaming units. The number of streaming units defines the capacity, resources, and limits of an instance. An instance with a larger size can handle higher loads and process larger amounts of events, has more storage, and can handle more clients and connections.","size_preview_message":"The selected size is available as a Technology Preview with limited capabilities at this time. To learn more, refer to the Workload Balancing section of the <0>Service Definition</0> page.","size_preview_title":"Technology Preview","size_unavailable_message":"Try a different selection or try again later","size_unavailable_title":"The selected size is temporarily unavailable in the selected cloud region","sizes_error":"$t(common:something_went_wrong) while fetching the available sizes. Select another cloud provider or cloud region, or try again later.","sizes_missing":"Size options display when a cloud provider and region are selected","some_region_unavailable_helper_text":"One or more regions in the selected cloud provider are temporarily unavailable. Select an available region or try again later.","standard_kafka_size_description":"Learn how to add streaming units to your account","standard_kafka_streaming_unit":"Your organization has {{count}} streaming unit remaining","standard_kafka_streaming_unit_zero":"Your organization has no streaming units remaining","standard_kafka_streaming_unit_one":"Your organization has {{count}} streaming unit remaining","standard_kafka_streaming_unit_other":"Your organization has {{count}} streaming units remaining","statuses":{"creating":"Creating","degraded":"Degraded","deleting":"Deleting","ready":"Ready"},"storage_value":"up to {{value}} GiB","stream_unit_value":"{{size}} streaming units","streaming_size_value":"{{value}} streaming unit","streaming_unit":"streaming units","temporarily_unavailable":"Temporarily unavailable","trial_all_region_unavailable_helper_text":"All regions in the selected cloud provider are temporarily unavailable. Select another cloud provider or try again later.","trial_kafka_size_description":"Size selection is available with a subscription. Trial instances have limited capacity, and their limits are listed under Details.","trial_some_region_unavailable_helper_text":"One or more regions in the selected cloud provider are temporarily unavailable. Select an available region or try again later."}')}}]);