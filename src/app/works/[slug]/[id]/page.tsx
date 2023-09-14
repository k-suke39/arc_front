'use client';
import React, { useState } from 'react';
import Aside from '@/app/components/Aside';
import CodeEditor from '@/app/components/CodeEditor';
import ChaptersHeader from '@/app/components/ChaptersHeader';
import { Providers } from '@/app/providers';
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Flex,
	Box,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

const page = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div>
			<main className="flex bg-slate-100 relative">
				<Aside />
				<section className="flex-grow">
					<div className="shadow-md px-6 py-4 my-5 mx-10 rounded-lg bg-white">
						<div className="text-xl font-bold text-gray-900 px-3 mb-2">
							allメソッドによるデータの取得
						</div>
						<hr className="mt-1 mb-2 rounded-lg" />
						<div>
							<div className="px-4 py-3 font-semibold rounded-lg">
								allメソッドを使用して、usersテーブルのレコードを全て取得してください。
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default page;
