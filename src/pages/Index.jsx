import React from 'react';
import { Box, Flex, Text, Input, Icon, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { FaSearch, FaChartPie, FaCalendarAlt, FaChartBar, FaUser, FaWallet, FaClipboardList, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="#1E1E2D" p="20px" minH="100vh">
      <Flex>
        {/* Sidebar */}
        <Box w="80px" bg="#14141B" p="20px" borderRadius="20px 0 0 20px">
          <VStack spacing="20px">
            <Icon as={FaWallet} boxSize="24px" color="white" />
            <Icon as={FaClipboardList} boxSize="24px" color="white" />
            <Icon as={FaUsers} boxSize="24px" color="white" />
          </VStack>
        </Box>

        <Box flex="1" ml="20px">
          {/* Header */}
          <Flex h="60px" bg="#14141B" p="20px" align="center" justify="space-between">
            <Input
              placeholder="Search..."
              w="300px"
              h="40px"
              bg="#2E2E3D"
              borderRadius="20px"
              px="20px"
              fontSize="14px"
              color="white"
            />
            <Icon as={FaSearch} color="white" />
          </Flex>

          {/* Main Content */}
          <Box p="20px">
            {/* Greeting Section */}
            <Text fontSize="24px" color="white" mb="20px">
              Welcome to the Dashboard
            </Text>

            {/* Statistics Cards */}
            <SimpleGrid columns={3} spacing="20px" mb="20px">
              <Box w="250px" h="150px" bg="turquoise" borderRadius="10px" p="20px">
                <Text fontSize="18px" fontWeight="bold" color="#333333">
                  Weekly Balance
                </Text>
                <Text fontSize="14px" color="#666666">
                  $5,000
                </Text>
              </Box>
              <Box w="250px" h="150px" bg="yellow" borderRadius="10px" p="20px">
                <Text fontSize="18px" fontWeight="bold" color="#333333">
                  Orders In Line
                </Text>
                <Text fontSize="14px" color="#666666">
                  15
                </Text>
              </Box>
              <Box w="250px" h="150px" bg="pink" borderRadius="10px" p="20px">
                <Text fontSize="18px" fontWeight="bold" color="#333333">
                  New Clients
                </Text>
                <Text fontSize="14px" color="#666666">
                  8
                </Text>
              </Box>
            </SimpleGrid>

            {/* Sales Chart */}
            <Box w="500px" h="300px" bg="#14141B" borderRadius="10px" p="20px" mb="20px">
              <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                Sales Chart
              </Text>
              <Box h="200px" w="100%" bg="gray.700" />
            </Box>

            {/* Calendar */}
            <Box w="250px" h="300px" bg="#14141B" borderRadius="10px" p="20px" mb="20px">
              <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                Calendar
              </Text>
              <Box h="200px" w="100%" bg="gray.700" />
            </Box>

            {/* Pie Chart and Details */}
            <Box w="300px" h="300px" bg="#14141B" borderRadius="10px" p="20px" mb="20px">
              <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                Pie Chart
              </Text>
              <Box h="150px" w="150px" bg="gray.700" mb="20px" />
              <Text fontSize="14px" color="white">
                Details about the pie chart.
              </Text>
            </Box>

            {/* Weekly Sales Bar Chart */}
            <Box w="250px" h="150px" bg="#14141B" borderRadius="10px" p="20px" mb="20px">
              <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                Weekly Sales
              </Text>
              <Box h="100px" w="100%" bg="gray.700" />
            </Box>

            {/* Customer Details */}
            <Box w="500px" h="150px" bg="#14141B" borderRadius="10px" p="20px" mb="20px">
              <Text fontSize="18px" fontWeight="bold" color="white" mb="20px">
                Customer Details
              </Text>
              <Box h="30px" w="100%" bg="gray.700" />
            </Box>
          </Box>

          {/* Footer */}
          <Flex h="40px" bg="#14141B" p="10px 20px" align="center">
            <Text fontSize="12px" color="gray.500">
              © 2023 Dashboard. All rights reserved.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;